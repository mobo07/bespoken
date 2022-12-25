import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RegisterDetails } from "../data/types";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import SkeletonLoader from "../components/UI/SkeletonLoader";

const Register = () => {
  //MUTATION
  const { mutate: register, isLoading } = useMutation({
    mutationFn: (details: RegisterDetails) => {
      return axios.post(
        "https://encouraging-hare-garment.cyclic.app/api/auth/register",
        details
      );
    },
    onSuccess: (data) => {
      // console.log(data);
      if (data.status === 201) navigate("/login");
    },
    onError: (error: AxiosError) => {
      if (error.response?.status) {
        setErr((error.response?.data as any).message);
      } else {
        setErr(error.message);
      }
    },
  });

  const [userInfo, setUserInfo] = useState<RegisterDetails>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [err, setErr] = useState<string | undefined>("");
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prevState: RegisterDetails) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr(undefined);

    //CHECK THAT PASSWORDS MATCH
    if (userInfo.password !== confirmPass) {
      setErr("Password mismatch!");
      return;
    } else register(userInfo);
    // console.log(userInfo);
  };

  return (
    <div className="w-screen h-screen bg-[#f8e1e1] flex items-center justify-center">
      <div className="bg-white p-4 w-[60%] max-w-[450px]">
        {err && <p className="text-red-600 my-2 text-center text-sm">{err}</p>}
        <h1 className="text-2xl">CREATE AN ACCOUNT</h1>
        <form className="my-3 flex flex-wrap" onSubmit={handleSubmit}>
          <input
            className="border p-2 mx-1 my-2 min-w-[40%] flex-1 outline-none"
            type="text"
            name="firstname"
            required
            value={userInfo.firstname}
            onChange={handleInput}
            placeholder="first name"
          />
          <input
            className="border p-2 mx-1 my-2 min-w-[40%] flex-1 outline-none"
            type="text"
            name="lastname"
            required
            value={userInfo.lastname}
            onChange={handleInput}
            placeholder="last name"
          />
          <input
            className="border p-2 mx-1 my-2 min-w-[40%] flex-1 outline-none"
            type="email"
            name="email"
            required
            value={userInfo.email}
            onChange={handleInput}
            placeholder="email"
          />
          <input
            className="border p-2 mx-1 my-2 min-w-[40%] flex-1 outline-none"
            type="password"
            name="password"
            required
            value={userInfo.password}
            onChange={handleInput}
            placeholder="password"
          />
          <input
            className="border p-2 mx-1 my-2 min-w-[40%] flex-1 outline-none"
            type="password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            required
            placeholder="confirm password"
          />
          <div className="w-full flex flex-col">
            <span className="my-2 text-xs">
              ALREADY HAVE AN ACCOUNT?{" "}
              <NavLink
                to="/login"
                className="hover:underline hover:text-[#fa9696] w-max"
              >
                LOGIN
              </NavLink>
            </span>
            <button
              className="bg-[#550417] text-white text-center w-32 py-2 mt-3"
              type="submit"
              disabled={isLoading ? true : false}
              style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
            >
              {isLoading ? (
                <SkeletonLoader type="default" color="#FFF" />
              ) : (
                "REGISTER"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

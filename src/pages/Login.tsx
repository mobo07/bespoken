import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginDetails } from "../data/types";
import { useState } from "react";
import SkeletonLoader from "../components/UI/SkeletonLoader";
import { useAppDispatch } from "../redux/hooks";
import { addUser } from "../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loginInfo, setLoginInfo] = useState<LoginDetails>({
    email: "",
    password: "",
  });
  const [err, setErr] = useState<string | undefined>("");

  //MUTATION
  const { mutate: login, isLoading } = useMutation({
    mutationFn: (details: LoginDetails) => {
      return axios.post(
        "https://encouraging-hare-garment.cyclic.app/api/auth/login",
        details
      );
    },
    onSuccess: (data) => {
      // console.log(data);
      if (data.status === 200) {
        dispatch(
          addUser({
            firstname: data.data.firstname,
            lastname: data.data.lastname,
            email: data.data.email,
          })
        );
        navigate("/");
      }
    },
    onError: (error: AxiosError) => {
      if (error.response?.status) {
        setErr((error.response?.data as any).message);
      } else {
        setErr(error.message);
      }
    },
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo((prevState: LoginDetails) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr(undefined);
    login(loginInfo);
    // console.log(loginInfo);
  };

  return (
    <div className="w-full h-screen bg-[#f8e1e1] flex items-center justify-center">
      <div className="bg-white p-4 w-[30%] max-w-[450px]">
        {err && <p className="text-red-600 my-2 text-center text-sm">{err}</p>}
        <h1 className="text-2xl">SIGN IN</h1>
        <form className="my-3 flex flex-col" onSubmit={handleSubmit}>
          <input
            className="border p-3 my-2 w-full outline-none"
            type="email"
            name="email"
            required
            value={loginInfo.email}
            onChange={handleInput}
            placeholder="email"
          />
          <input
            className="border p-3 my-2 w-full outline-none"
            type="password"
            name="password"
            required
            value={loginInfo.password}
            onChange={handleInput}
            placeholder="password"
          />
          <NavLink
            to="/register"
            className="text-xs my-2 hover:underline hover:text-[#fa9696] w-max"
          >
            CREATE A NEW ACCOUNT
          </NavLink>
          <button
            className="bg-[#550417] text-white text-center w-32 py-2 mt-3"
            type="submit"
            disabled={isLoading ? true : false}
            style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
          >
            {isLoading ? (
              <SkeletonLoader type="default" color="#FFF" />
            ) : (
              "LOGIN"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

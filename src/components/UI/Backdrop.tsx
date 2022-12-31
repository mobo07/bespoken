interface Props {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Backdrop = ({ openSidebar, setOpenSidebar }: Props) => {
  return (
    <div
      style={{ display: openSidebar ? "block" : "none" }}
      onClick={() => setOpenSidebar(false)}
      className="absolute top-[4.3rem] z-[40] w-screen h-screen bg-[rgba(0,0,0,0.7)]"
    ></div>
  );
};

export default Backdrop;

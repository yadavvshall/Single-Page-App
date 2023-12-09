
import { RiContactsFill } from "react-icons/ri";
import { PiTelegramLogo } from "react-icons/pi";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { LuSendHorizonal } from "react-icons/lu";

const Sidebar = () => {
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    height: "100vh", 
    width: "4rem",
    backgroundColor: "#f2f2f2",
    padding: "1rem",
    color: "#000",
  };

  const iconStyles = {
    marginBottom: ".5rem", 
  };

  return (
    <div style={containerStyles}>
      <div style={{ ...iconStyles, marginBottom: "9rem" }} className="mb-4">
        {" "}
        
        <PiTelegramLogo className="text-4xl" />
      </div>
      <div style={{ ...iconStyles, marginBottom: "9rem" }} className="mb-4">
        {" "}
       
        <RiContactsFill className="text-4xl" />
      </div>
      <div style={{ ...iconStyles, marginBottom: "2rem" }} className="mb-4">
        <RiContactsFill className="text-4xl" />
      </div>
      <div style={{ ...iconStyles, marginBottom: "2rem" }} className="mb-4">
        <LuSendHorizonal className="text-4xl" />
      </div>
      <div style={{ ...iconStyles, marginBottom: "2rem" }} className="mb-4">
        <MdOutlineCreateNewFolder className="text-4xl" />
      </div>
      <div style={{ ...iconStyles, marginBottom: "0.8rem" }} className="mb-4">
        <MdOutlineCreateNewFolder className="text-4xl" />
      </div>
    </div>
  );
};

export default Sidebar;

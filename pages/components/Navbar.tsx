import Image from "next/image";
import navlogo from "../../public/image/logo.png";
import navStyle from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={navStyle.navbar}>
      <div style={{ padding: "15px", marginLeft: "65px" }}>
        <Image src={navlogo} alt="boibitaanlogo" height="35vh" width="140vh" />
      </div>
    </div>
  );
};
export default Navbar;

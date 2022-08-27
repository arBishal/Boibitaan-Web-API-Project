import Image from "next/image";
import navlogo from "../../public/logo/logo.png";
import navStyle from "./navbar.module.css";
import { Row, Col, Input } from "antd";
import NavbarRight from "./NavbarRight";
import Router from "next/router";

const { Search } = Input;
const onSearch = (value: any) => console.log(value);

const Navbar = () => {
  return (
    <div className={navStyle.navbar}>
      <Row justify="center" align="middle" style={{ width: "100%" }}>
        <Col span={5} onClick={()=>Router.push('/')}>
          <div className={navStyle.navbarImage}>
            <Image
              src={navlogo}
              alt="boibitaanlogo"
              height="35vh"
              width="140vh"
            />
          </div>
        </Col>
        <Col span={8}>
          <Search
            placeholder="এখানে সার্চ করুন"
            onSearch={onSearch}
            enterButton
          />
        </Col>
        <Col
          span={5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <NavbarRight />
        </Col>
      </Row>
    </div>
  );
};
export default Navbar;

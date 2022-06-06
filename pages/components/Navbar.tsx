import Image from "next/image";
import navlogo from "../../public/image/logo.png";
import navStyle from "./navbar.module.css";
import { Row, Col, Input } from "antd";
import NavbarRight from "./NavbarRight";

const { Search } = Input;
const onSearch = (value: any) => console.log(value);

const Navbar = () => {
  return (
    <div className={navStyle.navbar}>
      <Row justify="center" align="middle" style={{ width: "100%" }}>
        <Col span={2}></Col>
        <Col span={6}>
          <div style={{ paddingTop: "15px", paddingBottom: "15px" }}>
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
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        </Col>
        <Col
          span={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <NavbarRight />
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  );
};
export default Navbar;

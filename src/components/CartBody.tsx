import { useState} from "react";
import { Row, Col } from "antd";
import CartBodyStyle from "./cartBody.module.css";
import CartItems from "./CartItems";

function CartBody() {
  const [cartItem, setCartItem] = useState<boolean>(true);
  return cartItem ? (
    <div className={CartBodyStyle.cartBody}>
      <CartItems></CartItems>
    </div>
  ) : (
    <div className={CartBodyStyle.cartBody}>
      <Row>
        <Col span={8} offset={8}>
          <p className={CartBodyStyle.cartText}>
            আপনার কার্টে কোন বই নেই। <br/> অর্ডার করার জন্য কার্টে বই যুক্ত করুন। <br/> ধন্যবাদ।
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default CartBody;

import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import CheckoutBodyStyle from "./checkoutBody.module.css";
import CheckoutCardInfo from "./CheckoutCardInfo";
import CheckoutCardPayment from "./CheckoutCardPayment";
import Button from "../ui-base-components/Button";
import { error, success } from "../ui-base-components/Modal";
import { useSession } from "next-auth/react";
import { Cart, PurchaceRequest, PurchaceResponse, User } from "../../lib/types";
import { useApollo } from "../../lib/apollo-client";
import { getUserDetails } from "../../lib/hasura_query";
import Loading from "./Loading";

function CheckoutBody() {
  const [open, setOpen] = useState<boolean>(false);
  const [purchaceRequest, setPurchaceRequest] = useState<PurchaceRequest>();
  const { data: session, status } = useSession();

  const handleClick = async () => {
    console.log(purchaceRequest);
    if (status === "authenticated") {
      const { token } = session;
      const res = await fetch("/api/purchaceRequest", {
        method: "POST",
        body: JSON.stringify({ token, purchaceRequest }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const { verdict, message }: PurchaceResponse = await res.json();
      if (verdict) {
        localStorage.setItem("cart", "{}");
        success(
          "দারুণ!",
          "অর্ডারটি সফল হয়েছে। দয়া করে ৫-৭ কার্যদিবস পর্যন্ত অপেক্ষা করুন। ধন্যবাদ।"
        );
      } else {
        // @ts-ignore
        error("দুঃক্ষিত", message);
      }
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      // @ts-ignore
      const { token } = session;
      const client = useApollo(token);
      // Fetching user's personal info
      const res = await client.query({
        query: getUserDetails(),
      });
      const users = res.data.user;
      // User Exists...
      if (users?.length) {
        const user: User = { ...users[0] };

        // getting cart
        const cart: Cart = JSON.parse(
          (localStorage.getItem("cart") as string) || "{}"
        );

        // evaluate total price
        let totalPrice = 0;
        const products = Object.keys(cart).map((id) => {
          totalPrice += cart[id].amount * cart[id].book.price;
          return {
            id,
            quantity: cart[id].amount,
            suplier: cart[id].book.supplier,
          };
        });

        setPurchaceRequest({
          clientInfo: {
            id: user.id,
            name: user.name,
            phone: user.phone,
            address: user.address,
            accountNumber: user.accountNumber,
            secretKey: "",
          },
          products,
          totalPrice,
        });
      }
    };
    if (status === "authenticated") {
      fetchUser();
    }
  }, [status]);

  if (status === "loading" || !purchaceRequest) {
    return (
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", margin:"50vh"}}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={CheckoutBodyStyle.checkoutBody}>
      <Row>
        <Col span={8} offset={8}>
          <CheckoutCardInfo
            clientInfo={purchaceRequest.clientInfo}
            setPurchaceRequest={setPurchaceRequest}
          ></CheckoutCardInfo>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8}>
          <div className={CheckoutBodyStyle.checkoutColumn}>
            <CheckoutCardPayment
              accountNumber={purchaceRequest.clientInfo.accountNumber}
              secretKey={purchaceRequest.clientInfo.secretKey}
              setPurchaceRequest={setPurchaceRequest}
            ></CheckoutCardPayment>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={4} offset={11}>
          <Button
            theme="dark"
            style={{ marginTop: "20px" }}
            onClick={handleClick}
          >
            সম্পন্ন করুন
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default CheckoutBody;

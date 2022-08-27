import React, { useEffect, useState } from "react";
import ProfileInfoCardStyle from "./profileBody.module.css";
import InputText from "../ui-base-components/InputText";
import InputPassword from "../ui-base-components/InputPassword";
import InputTextArea from "../ui-base-components/InputTextArea";
import Button from "../ui-base-components/Button";
import { User } from "../../lib/types";
import { useSession } from "next-auth/react";
import { useApollo } from "../../lib/apollo-client";
import { getUserDetails, updateUserInfo } from "../../lib/hasura_query";
import Loading from "./Loading";

const ProfileInfoCard = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User>();

  const handleChange = (e: { target: { id: string; value: string } }) => {
    const { id, value } = e.target;
    setUser((prev) => {
      if (prev) return { ...prev, [id]: value };
    });
  };

  const handleClick = async () => {
    if (status === "authenticated" && user) {
      try {
        console.log(user);
        const { token } = session;
        const client = useApollo(token);
        const res = await client.mutate({
          mutation: updateUserInfo(user),
        });
        if (res.data) {
          const { returning } = res.data.update_user;
          setUser(returning[0]);
          alert("Update Successful!");
        }
      } catch (err) {
        alert("Update Failed!");
        console.log({ err });
      }
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { token } = session;
      const client = useApollo(token);
      const res = await client.query({
        query: getUserDetails(),
      });
      const users = res.data.user;
      if (users?.length) {
        setUser(users[0]);
      }
    };
    if (status === "authenticated") {
      fetchUser();
    }
  }, [status]);

  return user ? (
    <div>
      <div className={ProfileInfoCardStyle.profileForm}>
        <div className={ProfileInfoCardStyle.inputStyle}>
          <p style={{ marginBottom: "3px" }}> পূর্ণ নাম </p>
          <InputText
            id="name"
            placeholder={"নাম লিখুন"}
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className={ProfileInfoCardStyle.inputStyle}>
          <p style={{ marginBottom: "3px" }}> ই-মেইল </p>
          <InputText
            id="email"
            placeholder={"ইমেইল"}
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className={ProfileInfoCardStyle.inputStyle}>
          <p style={{ marginBottom: "3px" }}> ফোন নাম্বার </p>
          <InputText
            id="phone"
            placeholder={"ফোন"}
            value={user.phone}
            onChange={handleChange}
          />
        </div>
        <div className={ProfileInfoCardStyle.inputStyle}>
          <p style={{ marginBottom: "3px" }}> পূর্ণ ঠিকানা </p>
          <InputTextArea
            id="address"
            value={user.address}
            onChange={handleChange}
            placeholder={"পূর্ণ ঠিকানা"}
            autoSize={{ minRows: 3, maxRows: 6 }}
          ></InputTextArea>
        </div>
        <div className={ProfileInfoCardStyle.inputStyle}>
          <p style={{ marginBottom: "3px" }}> ব্যাংক অ্যাকাউন্ট </p>
          <InputText
            id="accountNumber"
            placeholder={"ব্যাংক অ্যাকাউন্ট"}
            value={user.accountNumber}
            onChange={handleChange}
          />
        </div>
        <div className={ProfileInfoCardStyle.inputStyle}>
          <p style={{ marginBottom: "3px" }}> গোপন নাম্বার </p>
          <InputPassword
            placeholder={"গোপন নাম্বার"}
            id="secretKey"
            value={user.secretKey}
            onChange={handleChange}
          />
        </div>
        <Button
          style={{ marginTop: "20px", marginBottom: "-15px" }}
          onClick={handleClick}
        >
          সেভ করুন
        </Button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default ProfileInfoCard;

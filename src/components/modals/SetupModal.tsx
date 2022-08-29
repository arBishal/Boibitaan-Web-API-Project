import { useSession } from "next-auth/react";
import { useState } from "react";
import Button from "../../ui-base-components/Button";
import InputText from "../../ui-base-components/InputText";
import Modal from "../../ui-base-components/Modal";
import {success} from "../../ui-base-components/Modal";

type SetupModaProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SetupModal({ open, setOpen }: SetupModaProps) {
  const [accountNumber, setAccountNumber] = useState<string>();
  const [secret, setSecret] = useState<string>();
  const { data: session, status } = useSession();

  async function updateCredential(accountNumber: number, secret: string) {
    if (status === "authenticated") {
      const { token } = session;
      const checkSecret = async () => {
        const res = await fetch("/api/updateUserBankInformation", {
          method: "POST",
          body: JSON.stringify({ token, accountNumber, secretKey: secret }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const { status, message } = await res.json();
        console.log({ status, message });
        if (status) {
          setOpen(false);
          alert("Successfully Added!");
        } else {
          alert(message);
        }
      };

      checkSecret();
    }
  }

  const handleClick = () => {
    const accNo = Number(accountNumber);
    console.log(accountNumber);
    console.log(accNo);
    console.log(!!secret);
    if (!!accNo && !!secret && secret !== "") {
      console.log("clicked");
      updateCredential(accNo, secret);
    }
    success('দারুণ!', 'কাজটি সফল হয়েছে।')
    setOpen(false);
  };
  const handleCancel = () => {
    //setOpen(false);
  };

  return (
    <Modal
      visible={open}
      title="লেনদেন বিষয়ক তথ্যাবলি"
      onCancel={handleCancel}
      footer={[
        <Button
          key="cancelButton"
          theme="dark"
          onClick={handleClick}
          style={{ marginRight: "7px" }}
        >
          নিশ্চিত করুন
        </Button>,
      ]}
    >
      <div>
        <p>
          দয়া করে আপনার ব্যাংক অ্যাকাউন্ট নাম্বারটি দিন এবং লেনদেনের জন্য একটি
          গোপন নাম্বার সেট করুন। ধন্যবাদ।
        </p>
      </div>
      <div>
        <p style={{ marginBottom: "3px" }}> ব্যাংক অ্যাকাউন্ট </p>
        <InputText
          placeholder="ব্যাংক অ্যাকাউন্ট"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        ></InputText>
      </div>
      <div>
        <p style={{ marginBottom: "3px", marginTop: "5px" }}> গোপন নাম্বার </p>
        <InputText
          placeholder="গোপন নাম্বার"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
        ></InputText>
      </div>
    </Modal>
  );
}

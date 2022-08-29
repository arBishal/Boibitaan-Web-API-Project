import React from "react";
import "antd/dist/antd.css";
import { Modal as AntdModal } from "antd";

type ModalProps = React.ComponentProps<typeof AntdModal> & {};

export const error = (title: string, content: string) => {
  AntdModal.error({
    title: title,
    content: content,
    okText: "ঠিক আছে",
  });
};

export const success = (title: string, content: string) => {
  AntdModal.success({
    title: title,
    content: content,
    okText: "ঠিক আছে",
  });
};

const Modal = ({ children, ...props }: ModalProps) => {
  return <AntdModal {...props}>{children}</AntdModal>;
};
export default Modal;

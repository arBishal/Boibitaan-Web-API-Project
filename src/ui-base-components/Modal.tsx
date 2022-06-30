import React from "react";
import "antd/dist/antd.css";
import { Modal as AntdModal } from "antd";

type ModalProps = React.ComponentProps<typeof AntdModal> & {};

const Modal = ({ children, ...props }: ModalProps) => {
  return <AntdModal {...props}>{children}</AntdModal>;
};
export default Modal;

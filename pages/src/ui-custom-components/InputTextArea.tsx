import React from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const { TextArea } = Input;
type InputTextAreaProps = React.ComponentProps<typeof TextArea>;

const AntDInputTextArea = (props: InputTextAreaProps) => {
  return <TextArea {...props}></TextArea>;
};

export default AntDInputTextArea;

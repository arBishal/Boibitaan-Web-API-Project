import React from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

type InputTextProps = React.ComponentProps<typeof Input>;

const AntDInputText = (props: InputTextProps) => {
  return <Input {...props}></Input>;
};

export default AntDInputText;

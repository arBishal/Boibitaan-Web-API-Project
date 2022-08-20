import { Button as AntDButton, ButtonProps as AntButtonProps } from "antd";
import "antd/dist/antd.css";
import buttonstyle from "./button.module.css";

type ButtonProps = Partial<
  AntButtonProps & {
    theme: string;
  }
>;

const getButtonClassName = (theme: string) => {
  switch (theme) {
    case "light":
      return "button-light";
    case "invisible":
      return "button-invisible";
    case "remove":
      return "button-remove";
    case "counter":
      return "button-counter";
    default:
      return "button-dark";
  }
};

const Button = ({ theme = "dark", ...props }: ButtonProps) => {
  const className: string = getButtonClassName(theme);
  return (
    <AntDButton className={buttonstyle[className]} {...props}></AntDButton>
  );
};

export default Button;

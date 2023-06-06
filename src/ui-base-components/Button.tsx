import { Button as AntDButton, ButtonProps as AntButtonProps } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import buttonstyle from "./button.module.css";

type ButtonProps = Partial<
  AntButtonProps & {
    theme: string;
    lock: boolean;
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

const Button = ({
  onClick: click,
  lock,
  theme = "dark",
  ...props
}: ButtonProps) => {
  const className: string = getButtonClassName(theme);

  const [loadings, setLoadings] = useState<boolean>(false);

  const enterLoading = () => {
    setLoadings(true);

    setTimeout(() => {
      setLoadings(false);
    }, 3000);
  };

  return (
    <AntDButton
      className={buttonstyle[className]}
      loading={!lock && loadings}
      onClick={(e) => {
        enterLoading();
        if (click) {
          click(e);
        }
      }}
      {...props}
    ></AntDButton>
  );
};

export default Button;

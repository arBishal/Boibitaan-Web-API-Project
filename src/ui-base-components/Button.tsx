import { Button as AntDButton, ButtonProps as AntButtonProps } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
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

const Button = ({ onClick: click, theme = "dark", ...props }: ButtonProps) => {
  const className: string = getButtonClassName(theme);

  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <AntDButton
      className={buttonstyle[className]}
      loading={loadings[0]}
      onClick={(e) => {
        enterLoading(0);
        if (click) {
          click(e);
        }
      }}
      {...props}
    ></AntDButton>
  );
};

export default Button;

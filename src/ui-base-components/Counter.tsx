import React, { useState } from "react";
import Button from "../ui-base-components/Button";
import MinusCircleOutlined from "@ant-design/icons/lib/icons/MinusCircleOutlined";
import PlusCircleOutlined from "@ant-design/icons/lib/icons/PlusCircleOutlined";

const Counter = () => {
    const [counter, setCounter] = useState<number>(1);

    const increase = () => {
        setCounter(count => count + 1);
      };

      const decrease = () => {
        if (counter > 1) {
          setCounter(count => count - 1);
        }
      };

    return (
        <div>
            <Button
          theme="counter"
        //   style={{ marginLeft: "5px", marginRight: "5px" }}
          onClick={decrease}>
            <MinusCircleOutlined />
            </Button>
            {counter}
            <Button
          theme="counter"
        //   style={{ marginLeft: "5px", marginRight: "5px" }}
          onClick={increase}>
            <PlusCircleOutlined />
            </Button>
        </div>
    );

};

export default Counter;
import React, { useState } from "react";
import classNames from "classnames";

interface ToggleProps {
  className?: string;
  disabled?: boolean;
  buttonColor?: string;
  backgroundColor?: string;
  onClick?: () => void;
}
const Toggle: React.FC<ToggleProps> = (props) => {
  let {
    className,
    disabled,
    buttonColor,
    backgroundColor,
    ...restProps
  } = props;
  const [isChecked, setIsChecked] = useState(false);
  const handleChecked = (flag: boolean) => {
    setIsChecked(flag);
  };
  return (
    <div className={classNames("toggle", className)}>
      <div
        className="toggle-wrapper"
        onClick={() => {
          handleChecked(!isChecked);
        }}
      >
        <div className={classNames("slider", { isChecked: isChecked })}></div>
      </div>
    </div>
  );
};
export default Toggle;

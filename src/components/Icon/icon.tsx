import React from "react";
import classNames from "classnames";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
library.add(fas);
export type ThemeProps =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark";
export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
}

const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props;
  const classes = classNames("bobo-icon", className, {
    [`icon-${theme}`]: theme,
  });
  return <FontAwesomeIcon className={classes} {...restProps}></FontAwesomeIcon>;
};
export default Icon;

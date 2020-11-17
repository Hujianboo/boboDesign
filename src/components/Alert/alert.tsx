import React, { useState } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";
export interface AlertProps {
  /**
   * title
   */
  title: string;
  /**
   * description
   */
  description?: string;
  /**
   * type
   */
  type?: AlertType;
  /**
   * onClose
   */
  onClose?: () => void;
  /**
   * closable
   */
  closable?: boolean;
}
export type AlertType = "success" | "default" | "danger" | "warning";

const Alert: React.FC<AlertProps> = ({
  title,
  description,
  type,
  onClose,
  closable,
}) => {
  const [hide, setHide] = useState(false);
  const classes = classNames("bobo-alert", {
    [`bobo-alert-${type}`]: type,
  });
  const titleClass = classNames("bobo-alert-title", {
    "bold-title": description,
  });
  const handleClose = () => {
    if (onClose) {
      // onClose();
      setHide(!hide);
    }
  };
  return (
    <Transition in={!hide} timeout={300} classNames="zoom-in-top" wrapper>
      <div className={classes}>
        <span className={titleClass}>{title}</span>
        {description && <p className="bobo-alert-desc">{description}</p>}
        {closable && (
          <span className="bobo-alert-close" onClick={handleClose}>
            <Icon icon="times-circle"></Icon>
          </span>
        )}
      </div>
    </Transition>
  );
};
Alert.defaultProps = {
  closable: true,
};
export default Alert;

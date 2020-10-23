import React, { useState } from "react";
import classNames from "classnames";

interface AlertProps {
  // 标题
  title: string;
  // 描述
  description?: string;
  // 类型
  type?: AlertType;
  // 关闭时触发的事件
  onClose?: () => void;
  // 是否显示关闭图标
  closable?: boolean;
}
export enum AlertType {
  Success = "success",
  Default = "default",
  Danger = "danger",
  Warning = "warning",
}

const Alert: React.FC<AlertProps> = (props) => {
  const { title, description, type, onClose, closable } = props;
  const [hide, setHide] = useState(false);
  const classes = classNames("bobo-alert", {
    [`bobo-alert-${type}`]: type,
  });
  const titleClass = classNames("viking-alert-title", {
    "bold-title": description,
  });
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setHide(true);
  };
  return (
    <div>
      {!hide && (
        <div>
          <div className={classes}>
            <span className={titleClass}>{title}</span>
            {description && <p className="bobo-alert-desc">{description}</p>}
            {closable && (
              <span className="bobo-alert-close" onClick={handleClose}>
                <span>关闭</span>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Alert;

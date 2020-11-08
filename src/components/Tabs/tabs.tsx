import React, { Children, useState, FunctionComponentElement } from "react";
import classNames from "classnames";
import { tabItemProps } from "./tabItem";
type SelectCallback = (selectedIndex: string) => void;
type mode = "line" | "card";

export interface tabsProps {
  defaultIndex?: string;
  onSelect?: SelectCallback;
  className?: string;
  type?: mode;
}
const Tabs: React.FC<tabsProps> = (props) => {
  const { defaultIndex, onSelect, className, children, type } = props;
  const classes = classNames("bobo-tabs", className, {
    "nav-line": type === "line",
    "nav-card": type === "card",
  });
  const [currentActive, setActive] = useState(defaultIndex);
  const handleClick = (index: string, disabled: boolean = false) => {
    if (!disabled) {
      setActive(index);
      if (onSelect) {
        onSelect(index);
      }
    }
  };
  const renderChildren = () => {
    return React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<tabItemProps>;
      const { label, disable } = childElement.props;
      const classes = classNames("bobo-tabs-nav-item", {
        "is-active": currentActive === i.toString(),
        disabled: disable,
      });
      return (
        <li
          className={classes}
          onClick={() => {
            handleClick(i.toString(), disable);
          }}
        >
          {label}
        </li>
      );
    });
  };
  const renderContent = () => {
    return React.Children.map(children, (child, i) => {
      if (i.toString() === currentActive) {
        return child;
      }
    });
  };
  return (
    <div>
      <ul className={classes}>{renderChildren()}</ul>
      <div>{renderContent()}</div>
    </div>
  );
};
Tabs.defaultProps = {
  defaultIndex: "0",
  type: "line",
};
export default Tabs;

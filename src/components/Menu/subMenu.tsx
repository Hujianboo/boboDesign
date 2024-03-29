import React, { useContext, FunctionComponentElement, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";
import Transition from "../Transition/transition";
import Icon from "../Icon/icon";
export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}
const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, children, className } = props;
  const [menuOpen, setOpened] = useState(false); //menu控制
  const context = useContext(MenuContext);

  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
  });
  let timer: any;
  const hoverMouse = (flag: boolean): void => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setOpened(flag);
    }, 300);
  };
  const clickEvent =
    context.mode === "vertical"
      ? {
          onClick: () => {
            setOpened(!menuOpen);
          },
        }
      : {};
  const hoverEvent =
    context.mode !== "vertical"
      ? {
          onMouseEnter: () => {
            hoverMouse(true);
          },
          onMouseLeave: () => {
            hoverMouse(false);
          },
        }
      : {};
  const renderChildren = () => {
    const submenuClass = classNames("bobo-submenu", {
      "menu-opend": menuOpen === true,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.error("it is not a childElement");
      }
    });
    return (
      <Transition in={menuOpen} timeout={300} classNames="zoom-in-top">
        <ul className={submenuClass}>{childrenComponent}</ul>
      </Transition>
    );
  };
  return (
    <li key={index} className={classes} {...hoverEvent}>
      <div className="submenu-title" {...clickEvent}>
        {title}
        <Icon icon="angle-down" className="arrow-icon"></Icon>
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";
export default SubMenu;
//先确定html的结构，class 和 样式
//确定对应的事件，onMouseEnter 和 onMouseLeave
//Enter-- 展开 Leave-- 收起
//
//

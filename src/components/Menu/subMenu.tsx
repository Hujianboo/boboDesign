import React, { useContext, FunctionComponentElement, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";
import { clear } from "console";
export interface SubMenuProps {
  index?: number;
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
    }, 500);
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
        return childElement;
      } else {
        console.error("it is not a childElement");
      }
    });
    return <ul className={submenuClass}>{childrenComponent}</ul>;
  };
  return (
    <li key={index} className={classes} {...hoverEvent}>
      <div className="submenu-title" {...clickEvent}>
        {title}
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

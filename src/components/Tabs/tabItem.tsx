import React, { Children, useState, FunctionComponentElement } from "react";

export interface tabItemProps {
  label: string | React.ReactElement;
  disable?: boolean;
  className?: string;
}

const TabItem: React.FC<tabItemProps> = (props) => {
  const { label, disable, children, className } = props;
  return <div>{children}</div>;
};
export default TabItem;

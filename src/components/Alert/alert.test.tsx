import React from "react";
import { render } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import Alert, { AlertProps } from "./alert";

const testProps: AlertProps = {
  title: "title",
  onClose: jest.fn(),
};
const typeProps: AlertProps = {
  ...testProps,
  type: "success",
  description: "hello",
  closable: false,
};
describe("test Alert component", () => {
  it("should render the correct default Alert", () => {
    const wrapper = render(<Alert {...testProps} />);
    expect(wrapper.queryByText("title")).toBeInTheDocument();
    fireEvent.click(wrapper.getByText("close"));
    expect(testProps.onClose).toHaveBeenCalled();
    expect(wrapper.queryByText("title")).not.toBeInTheDocument();
  });
  it("should render the correct default Alert", () => {
    const wrapper = render(<Alert {...typeProps}></Alert>);
    expect(wrapper.queryByText("title")).toHaveClass("bold-title");
    expect(wrapper.container.querySelector(".bobo-alert")).toHaveClass(
      "bobo-alert-success"
    );
    expect(wrapper.queryByText("hello")).toBeInTheDocument();
    expect(wrapper.queryByText("close")).not.toBeInTheDocument();
  });
});

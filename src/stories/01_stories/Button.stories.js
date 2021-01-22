import React from "react";
import { Button } from "./Button";

export default {
  title: "Workshop/First Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

/**
 * A simple primary button for CTA
 */
export const Primary = (args) => <Button {...args} />;
Primary.args = {
  variant: "primary",
  label: "Primary",
};

export const Secondary = (args) => <Button {...args} />;
Secondary.args = {
  variant: "secondary",
  label: "Secondary",
};

export const Large = (args) => <Button {...args} />;
Large.args = {
  size: "large",
  label: "Large",
};

export const Small = (args) => <Button {...args} />;
Small.args = {
  size: "small",
  label: "Small",
};

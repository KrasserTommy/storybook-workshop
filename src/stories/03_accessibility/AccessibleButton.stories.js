import React from "react";
import { AccessibleButton } from "./AccessibleButton";

export default {
  title: "Workshop/Third Example/AccessibleButton",
  component: AccessibleButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

/**
 * A simple primary button for CTA
 */
export const Accessible = (args) => <AccessibleButton {...args} />;
Accessible.args = {
  variant: "accessible",
  label: "Accessible",
};

export const NonAccessible = (args) => <AccessibleButton {...args} />;
NonAccessible.args = {
  variant: "nonAccessible",
  label: "NonAccessible",
};

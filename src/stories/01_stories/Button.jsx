import PropTypes from "prop-types";
import React from "react";
import "./button.css";

/**
 * A simple button UI component
 */
export const Button = ({ variant, backgroundColor, size, label, ...props }) => (
  <button
    type="button"
    className={["button", `button--${size}`, `button--${variant}`].join(" ")}
    style={backgroundColor && { backgroundColor }}
    {...props}
  >
    {label}
  </button>
);

Button.propTypes = {
  /**
   * Primary CTA or Secondary button
   */
  variant: PropTypes.oneOf(["primary", "secondary"]),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Size of the button
   */
  size: PropTypes.oneOf(["small", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  variant: "primary",
  size: "large",
  onClick: undefined,
};

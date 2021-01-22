import PropTypes from "prop-types";
import React from "react";
import "./button.css";

/**
 * A simple button UI component
 */
export const AccessibleButton = ({
  variant,
  backgroundColor,
  size,
  label,
  ...props
}) => (
  <button
    type="button"
    className={["button", `button--${size}`, `button--${variant}`].join(" ")}
    style={backgroundColor && { backgroundColor }}
    {...props}
  >
    {label}
  </button>
);

AccessibleButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  variant: PropTypes.oneOf(["nonAccessible", "accessible"]),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
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

AccessibleButton.defaultProps = {
  backgroundColor: null,
  variant: "nonAccessible",
  size: "large",
  onClick: undefined,
};

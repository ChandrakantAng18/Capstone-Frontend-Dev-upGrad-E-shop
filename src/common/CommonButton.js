import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function CommonButton({
  button_name,
  variant,
  color,
  text,
  onClick,
}) {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color}
      name={button_name}
    >
      {text}
    </Button>
  );
}

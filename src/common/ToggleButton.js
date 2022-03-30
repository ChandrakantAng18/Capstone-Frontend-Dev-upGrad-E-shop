import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import React from "react";

export default function ToggleButtons({ setProductCategory }) {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton
        onClick={() => {
          setProductCategory("All");
        }}
        value="left"
        aria-label="left aligned"
      >
        ALL
      </ToggleButton>
      <ToggleButton
        onClick={() => {
          setProductCategory("Apparel");
        }}
        value="left"
        aria-label="left aligned"
      >
        APPAREL
      </ToggleButton>
      <ToggleButton
        onClick={() => {
          setProductCategory("Electronics");
        }}
        value="left"
        aria-label="left aligned"
      >
        ELECTRONICS
      </ToggleButton>
      <ToggleButton
        onClick={() => {
          setProductCategory("Footwear");
        }}
        value="left"
        aria-label="left aligned"
      >
        FOOTWEAR
      </ToggleButton>
      <ToggleButton
        onClick={() => {
          setProductCategory("PersonalCare");
        }}
        value="left"
        aria-label="left aligned"
      >
        PERSONAL CARE
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

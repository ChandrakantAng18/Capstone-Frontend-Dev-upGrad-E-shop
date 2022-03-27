import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import React from "react";

export default function ToggleButtons() {
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
      <ToggleButton value="left" aria-label="left aligned">
        ALL
      </ToggleButton>
      <ToggleButton value="left" aria-label="left aligned">
        APPAREL
      </ToggleButton>
      <ToggleButton value="left" aria-label="left aligned">
        ELECTRONICS
      </ToggleButton>
      <ToggleButton value="left" aria-label="left aligned">
        FOOTWEAR
      </ToggleButton>
      <ToggleButton value="left" aria-label="left aligned">
        PERSONAL CARE
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
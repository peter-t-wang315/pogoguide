"use client";
import { Divider, ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function BeginnerAdvanced({ value, setValue }) {
  return (
    <ToggleButtonGroup
      color="common"
      value={value}
      exclusive
      onChange={(e) => setValue(e.target.value)}
      aria-label="beginner advanced"
    >
      <ToggleButton value="beginner" variant="ghost">
        Beginner
      </ToggleButton>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ backgroundColor: "common.white", margin: 0 }}
      />
      <ToggleButton value="advanced" variant="ghost">
        Advanced
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

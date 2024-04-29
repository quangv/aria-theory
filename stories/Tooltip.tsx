import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import MUITooltip from "@mui/material/Tooltip";

function TheoryMUITooltip() {
  return (
    <MUITooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </MUITooltip>
  );
}

export const Tooltip = ({ from }: { from: "mui" }) => {
  switch (from) {
    case "mui":
      return <TheoryMUITooltip />;
  }
};

import React from "react";

import MUITooltip from "./mui/MUITooltip";
import RadixUITooltip from "./radix-ui/RadixUITooltip";

export const Tooltip = ({ from }: { from: "mui" | "radix-ui" }) => {
  switch (from) {
    case "mui":
      return <MUITooltip />;
    case "radix-ui":
      return <RadixUITooltip />;
  }
};

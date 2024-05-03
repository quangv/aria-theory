import {
  expect,
  within,
  userEvent,
  findByRole,
  getByText,
} from "@storybook/test";
import { Tooltip } from "./Tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.tab();

    const tooltip = await findByRole(document.body, "tooltip");

    await expect(tooltip).toBeInTheDocument();
    await expect(getByText(tooltip, "Delete")).toBeInTheDocument();
  },
};

export const MUITooltip = {
  args: {
    from: "mui",
  },
};

export const RadixUITooltip = {
  args: {
    from: "radix-ui",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { TooltipUI } from ".";

const meta: Meta<typeof TooltipUI> = {
  title: "NovelUI/Components/Tooltips",
  component: TooltipUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Tooltip: Story = {};

export default meta;

import type { Meta, StoryObj } from "@storybook/react";
import Shadows from ".";
import { ColorShadows } from ".";
import { CSSShadows } from ".";

const meta: Meta<typeof Shadows> = {
  title: "NovelUI/Components/Shadows",
  component: Shadows,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const TWShadow: Story = {};
export const ColoredShadows: Story = {
  render: () => <ColorShadows />,
};
export const CSSShadow: Story = {
  render: () => <CSSShadows />,
};

export default meta;

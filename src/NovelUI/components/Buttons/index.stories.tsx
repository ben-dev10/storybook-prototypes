import type { Meta, StoryObj } from "@storybook/react";
import Buttons, { ShinyButton } from ".";
// import ShinyButton from ".";

const meta: Meta<typeof Buttons> = {
  title: "NovelUI/Components/Buttons",
  component: Buttons,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;
export const Button: Story = {};
export const ShinyButtons: Story = { render: () => <ShinyButton /> };

export default meta;

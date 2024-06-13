import type { Meta, StoryObj } from "@storybook/react";
import Buttons from ".";

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

export default meta;

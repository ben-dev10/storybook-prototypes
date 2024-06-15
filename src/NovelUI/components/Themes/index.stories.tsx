import type { Meta, StoryObj } from "@storybook/react";
import Theming from ".";

const meta: Meta<typeof Theming> = {
  title: "NovelUI/Components/Theming",
  component: Theming,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;
export const Themes: Story = {};

export default meta;

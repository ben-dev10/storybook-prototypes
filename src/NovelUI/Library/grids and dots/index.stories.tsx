import type { Meta, StoryObj } from "@storybook/react";
import { GridAndDots } from ".";

const meta: Meta<typeof GridAndDots> = {
  title: "NovelUI/Library/Grids and Dots",
  component: GridAndDots,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const GridsAndDots: Story = {
  args: {
    type: "grid",
  },
};

export default meta;

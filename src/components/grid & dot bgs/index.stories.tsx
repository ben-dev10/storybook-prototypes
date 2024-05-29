import type { Meta, StoryObj } from "@storybook/react";
import { GridAndDots } from ".";

const meta: Meta<typeof GridAndDots> = {
  title: "Components/Grids and Dots",
  component: GridAndDots,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const GridOrDot: Story = {
  args: {
    type: "grid",
  },
};

export default meta;

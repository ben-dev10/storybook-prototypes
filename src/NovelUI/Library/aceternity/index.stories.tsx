import type { Meta, StoryObj } from "@storybook/react";
import GridAndDots from "./components/GridAndDots";
import HoverBorderGradientUI from "./components/HoverBorderGradient";
import FlipWordsUI from "./components/FlipWords";

const meta: Meta<typeof GridAndDots> = {
  title: "NovelUI/Library/Aceternity",
  component: GridAndDots,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;
export const GridAndDot: Story = {
  args: {
    type: "grid",
  },
};
export const HoverBorderGradient: Story = {
  render: () => <HoverBorderGradientUI />,
};
export const FlipWords: Story = {
  render: () => <FlipWordsUI />,
};

export default meta;

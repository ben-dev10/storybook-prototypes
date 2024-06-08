import type { Meta, StoryObj } from "@storybook/react";
import { MarqueeUIVertical } from "./components/marquee-vertical";

const meta: Meta<typeof MarqueeUIVertical> = {
  title: "NovelUI/Library/Magic UI",
  component: MarqueeUIVertical,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;
export const MarqueeVertical: Story = {};
// export const HoverBorderGradient: Story = {
//   render: () => <HoverBorderGradientUI />,
// };

export default meta;

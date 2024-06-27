import type { Meta, StoryObj } from "@storybook/react";
import MagicTooltip from "./components/magic-tooltip";
import DynamicMetaTitle from "./components/dynamic-meta-title";
import VercelBento from "./components/vercel-bento";

const meta: Meta<typeof MagicTooltip> = {
  title: "NovelUI/Lab/Tutorials",
  component: MagicTooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;
export const MagicTooltips: Story = {};
export const DynamicTitle: Story = {
  render: () => <DynamicMetaTitle />,
};
export const VercelBentos: Story = {
  render: () => <VercelBento />,
};

export default meta;

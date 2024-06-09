import type { Meta, StoryObj } from "@storybook/react";
import MagicTooltip from "./components/magic-tooltip";
import DynamicMetaTitle from "./components/dynamic-meta-title";

const meta: Meta<typeof MagicTooltip> = {
  title: "Lab/Lab",
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

export default meta;

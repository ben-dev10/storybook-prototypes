import type { Meta, StoryObj } from "@storybook/react";
import MagicTooltip from "./components/magic-tooltip";
import DynamicMetaTitle from "./components/dynamic-meta-title";
import VercelBento from "./components/vercel-bento";
import TestBay from "./components/testbay";
import CSSFilters from "./components/css-filters";

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
export const CSSFilter: Story = {
  render: () => <CSSFilters />,
};
export const DynamicTitle: Story = {
  render: () => <DynamicMetaTitle />,
};
export const VercelBentos: Story = {
  render: () => <VercelBento />,
};
export const TestBays: Story = {
  render: () => <TestBay />,
};

export default meta;

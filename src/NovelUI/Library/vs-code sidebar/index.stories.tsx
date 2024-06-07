import type { Meta, StoryObj } from "@storybook/react";
import VSCodeSidebar from ".";

const meta: Meta<typeof VSCodeSidebar> = {
  title: "NovelUI/Library/VSCodeSidebar",
  component: VSCodeSidebar,
  parameters: {
    layout: "centered",
  },
};

type Story = StoryObj<typeof meta>;
export const Sidebar: Story = {};

export default meta;

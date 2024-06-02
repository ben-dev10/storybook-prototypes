import type { Meta, StoryObj } from "@storybook/react";
import { TabsUI } from ".";

const meta: Meta<typeof TabsUI> = {
  title: "NovelUI/Components/Tabs",
  component: TabsUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Tabs: Story = {};

export default meta;

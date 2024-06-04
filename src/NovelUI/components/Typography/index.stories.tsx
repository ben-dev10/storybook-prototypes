import type { Meta, StoryObj } from "@storybook/react";
import { TypographyUI } from ".";

const meta: Meta<typeof TypographyUI> = {
  title: "NovelUI/Components/Typography",
  component: TypographyUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Typography: Story = {};

export default meta;

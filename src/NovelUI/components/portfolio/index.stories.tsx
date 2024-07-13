import type { Meta, StoryObj } from "@storybook/react";
import ShowcaseCard from "./showcase-card/index";

const meta: Meta<typeof ShowcaseCard> = {
  title: "NovelUI/Components/Portfolio",
  component: ShowcaseCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;
export const ShowcaseCards: Story = {};

export default meta;

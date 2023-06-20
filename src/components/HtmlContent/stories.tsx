import { Meta, Story } from '@storybook/react';
import { HtmlContent, HtmlContentProps } from '.';

export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    html: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Est distinctio quasi corporis minus.
    Reiciendis, dolorem autem quibusdam rerum suscipit natus aperiam ipsum
    saepe aliquid sunt nisi hic quis eligendi beatae!`,
  },
} as Meta;

export const Template: Story<HtmlContentProps> = (args) => {
  return (
    <div>
      <HtmlContent {...args} />
    </div>
  );
};

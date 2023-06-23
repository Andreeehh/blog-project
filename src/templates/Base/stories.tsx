import { Meta, Story } from '@storybook/react/types-6-0';
import { Base, BaseProps } from '.';

import mock from './mock';

export default {
  title: 'Base',
  component: Base,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<BaseProps>;

export const Template: Story<BaseProps> = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};

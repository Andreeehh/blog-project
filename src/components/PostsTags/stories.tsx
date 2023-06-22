import { Meta, Story } from '@storybook/react/types-6-0';
import { PostsTags, PostsTagsProps } from '.';
import mock from './mock';

export default {
  title: 'PostsTags',
  component: PostsTags,
  args: mock,
  parameters: {
    layout: 'padded',
  },
} as Meta<PostsTagsProps>;

export const Template: Story<PostsTagsProps> = (args) => {
  console.log(args);
  console.log({ ...args });
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet
        omnis excepturi delectus, aliquid blanditiis, explicabo placeat vitae,
        totam impedit vero cumque ex ut assumenda quae mollitia perspiciatis
        distinctio? Cupiditate?
      </p>
      <PostsTags {...args} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet
        omnis excepturi delectus, aliquid blanditiis, explicabo placeat vitae,
        totam impedit vero cumque ex ut assumenda quae mollitia perspiciatis
        distinctio? Cupiditate?
      </p>
    </div>
  );
};

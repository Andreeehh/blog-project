import { Meta, Story } from '@storybook/react/types-6-0';
import { ArticleMeta, ArticleMetaProps } from '.';

import mock from './mock';

export default {
  title: 'ArticleMeta',
  component: ArticleMeta,
  args: mock,
  argTypes: {
    createdAt: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta<ArticleMetaProps>;

export const Template: Story<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} />
    </div>
  );
};

export const NoAuthor: Story<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta createdAt={args.createdAt} categories={args.categories} />
    </div>
  );
};

export const NoCategories: Story<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta createdAt={args.createdAt} author={args.author} />
    </div>
  );
};

export const JustDate: Story<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta createdAt={args.createdAt} />
    </div>
  );
};

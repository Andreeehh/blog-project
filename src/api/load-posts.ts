import config from 'config';
import { request } from 'graphql-request';
import { GRAPHQL_QUERIES } from 'graphql/queries';
import { PostsTemplateProps } from 'templates/PostsTemplate';

export type LoadPostsVariables = {
  categorySlug?: string;
  postSlug?: string;
  postSearch?: string;
  authorSlug?: string;
  tagSlug?: string;
  start?: number;
  limit?: number;
};

export const loadPosts = async (
  variables: LoadPostsVariables = {},
): Promise<PostsTemplateProps> => {
  const defaultVariables: LoadPostsVariables = {
    start: 0,
    limit: 10,
  };

  const data = (await request(config.graphqlUrl, GRAPHQL_QUERIES, {
    ...defaultVariables,
    ...variables,
  })) as PostsTemplateProps;

  return data;
};

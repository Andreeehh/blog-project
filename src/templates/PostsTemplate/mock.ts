import { PostsTemplateProps } from '.';
import { data } from '../../api/dados.json';

export default {
  setting: data.setting,
  posts: data.posts,
} as PostsTemplateProps;

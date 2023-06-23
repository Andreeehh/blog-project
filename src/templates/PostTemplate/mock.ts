import { PostTemplateProps } from '.';
import { data } from '../../api/dados.json';

export default {
  setting: data.setting,
  post: data.posts.data[2],
} as PostTemplateProps;

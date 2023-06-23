import { PostProps } from 'components/Post';
import { PostGrid } from 'components/PostGrid';
import { SettingsStrapi } from 'shared-typed/settings-strapi';
import { Base } from 'templates/Base';

export type PostsTemplateProps = {
  setting: SettingsStrapi;
  posts?: {
    data?: PostProps[];
  };
};

export const PostsTemplate = ({ setting, posts = {} }: PostsTemplateProps) => {
  return (
    <Base setting={setting}>
      <PostGrid posts={posts}></PostGrid>
    </Base>
  );
};

import { Comments } from 'components/Comments';
import { Post, PostProps } from 'components/Post';
import { PostsTags } from 'components/PostsTags';
import { SettingsStrapi } from 'shared-typed/settings-strapi';
import { Base } from 'templates/Base';

export type PostTemplateProps = {
  setting: SettingsStrapi;
  post: PostProps;
};

export const PostTemplate = ({ setting, post }: PostTemplateProps) => {
  return (
    <Base setting={setting}>
      <Post {...post}></Post>

      <PostsTags tags={post.attributes.tags} />

      <Comments
        title={post.attributes.title}
        slug={post.attributes.slug}
        id={post.id}
      />
    </Base>
  );
};

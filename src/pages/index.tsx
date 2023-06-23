import Head from 'next/head';
import { loadPosts } from 'api/load-posts';
import { GetStaticProps } from 'next';
import { PostsTemplate, PostsTemplateProps } from 'templates/PostsTemplate';

export default function Index({ posts, setting }: PostsTemplateProps) {
  return (
    <>
      <Head>
        <title>{setting.data.attributes.blogName}</title>
        <meta
          name="description"
          content={setting.data.attributes.blogDescription}
        />
      </Head>
      <PostsTemplate posts={posts} setting={setting} />
    </>
  );
}

export const getStaticProps: GetStaticProps<PostsTemplateProps> = async () => {
  let data = null;

  try {
    data = await loadPosts();
  } catch (e) {
    data = null;
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
    },
  };
};

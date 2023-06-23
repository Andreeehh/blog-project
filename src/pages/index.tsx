import Head from 'next/head';
import { defaultLoadPostVariables, loadPosts } from 'api/load-posts';
import { GetStaticProps } from 'next';
import { PostsTemplate, PostsTemplateProps } from 'templates/PostsTemplate';

export default function Index({
  posts,
  setting,
  variables,
}: PostsTemplateProps) {
  return (
    <>
      <Head>
        <title>{setting.data.attributes.blogName}</title>
        <meta
          name="description"
          content={setting.data.attributes.blogDescription}
        />
      </Head>
      <PostsTemplate posts={posts} setting={setting} variables={variables} />
    </>
  );
}

export const getStaticProps: GetStaticProps<PostsTemplateProps> = async () => {
  let data: PostsTemplateProps | null = null;

  try {
    data = await loadPosts();
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variables: {
        ...defaultLoadPostVariables,
      },
    },
    revalidate: 24 * 60 * 60,
  };
};

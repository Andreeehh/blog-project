import { defaultLoadPostVariables, loadPosts } from 'api/load-posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PostsTemplate, PostsTemplateProps } from 'templates/PostsTemplate';

export default function TagPage({
  posts,
  setting,
  variables,
}: PostsTemplateProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const tagName = posts.data[0].attributes.tags.data.filter(
    (tag) => tag.attributes.slug === router.query.slug,
  )[0].attributes.displayName;

  return (
    <>
      <Head>
        <title>
          Tag: {tagName} - {setting.data.attributes.blogName}
        </title>
        <meta
          name="description"
          content={setting.data.attributes.blogDescription}
        />
      </Head>
      <PostsTemplate posts={posts} setting={setting} variables={variables} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostsTemplateProps> = async (
  ctx,
) => {
  let data = null;

  const variables = { tagSlug: ctx.params.slug as string };

  try {
    data = await loadPosts(variables);
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
        ...variables,
      },
    },
    revalidate: 24 * 60 * 60,
  };
};

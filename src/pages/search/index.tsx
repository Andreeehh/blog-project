import { defaultLoadPostVariables, loadPosts } from 'api/load-posts';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PostsTemplate, PostsTemplateProps } from 'templates/PostsTemplate';

export default function SearchPage({
  posts,
  setting,
  variables,
}: PostsTemplateProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Pesquisa: {router.query.q} - {setting.data.attributes.blogName}
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

export const getServerSideProps: GetServerSideProps<
  PostsTemplateProps
> = async (ctx) => {
  let data = null;
  const query = ctx.query.q || '';
  if (!query) {
    return {
      notFound: true,
    };
  }
  const variables = { postSearch: query as string };

  try {
    data = await loadPosts(variables);
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts) {
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
  };
};

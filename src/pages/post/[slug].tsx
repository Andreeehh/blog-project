import { loadPosts } from 'api/load-posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PostTemplate } from 'templates/PostTemplate';
import { PostsTemplateProps } from 'templates/PostsTemplate';

export default function PostPage({ posts, setting }: PostsTemplateProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Head>
        <title>
          {posts.data[0].attributes.title} - {setting.data.attributes.blogName}
        </title>
        <meta name="description" content={posts.data[0].attributes.except} />
      </Head>

      <PostTemplate post={posts.data[0]} setting={setting}></PostTemplate>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data: PostsTemplateProps | null = null;
  let paths = [];

  try {
    data = await loadPosts();
    paths = data.posts.data.map((post) => ({
      params: { slug: post.attributes.slug },
    }));
  } catch (e) {
    data = null;
  }

  if (!data) {
    paths = [];
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostsTemplateProps> = async (
  ctx,
) => {
  let data = null;

  try {
    data = await loadPosts({ postSlug: ctx.params.slug as string });
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
    },
    revalidate: 24 * 60 * 60,
  };
};

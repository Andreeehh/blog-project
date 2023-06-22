import { PostProps } from 'components/Post';
import * as Styled from './styles';
import Link from 'next/link';
import { Heading } from 'components/Heading';
import { ArticleMeta } from 'components/ArticleMeta';

export type PostCardProps = PostProps;

export const PostCard = ({ attributes }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={attributes.slug}>
        <a>
          <Styled.Cover src={attributes.cover.data.attributes.url} />
        </a>
      </Link>

      <Heading as="h3" size="small">
        <Link href={`/post/${attributes.slug}`}>
          <a>{attributes.title}</a>
        </Link>
      </Heading>

      <Styled.Excerpt>{attributes.except}</Styled.Excerpt>
      <ArticleMeta
        createdAt={attributes.createdAt}
        categories={attributes.categories}
        author={attributes.author}
      ></ArticleMeta>
    </Styled.Wrapper>
  );
};

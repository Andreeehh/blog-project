import { Heading } from 'components/Heading';
import * as Styled from './styles';
import { PostHeader } from 'shared-typed/post-header';
import { ArticleMeta } from 'components/ArticleMeta';

export type ArticleHeaderProps = {
  attributes: PostHeader;
};

export const ArticleHeader = ({ attributes }: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="big">{attributes.title}</Heading>
      <Styled.Excerpt>{attributes.except}</Styled.Excerpt>
      <Styled.Cover
        src={attributes.cover.data.attributes.url}
        alt={
          attributes.cover.data.attributes.alternativeText
            ? attributes.cover.data.attributes.alternativeText
            : ''
        }
      />

      <ArticleMeta
        createdAt={attributes.createdAt}
        categories={attributes.categories}
        author={attributes.author}
      ></ArticleMeta>
    </Styled.Wrapper>
  );
};

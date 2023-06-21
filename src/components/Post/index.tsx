import { ArticleHeader } from 'components/ArticleHeader';
import * as Styled from './styles';
import { PostHeader } from 'shared-typed/post-header';
import { HtmlContent } from 'components/HtmlContent';

export type PostProps = {
  attributes: PostHeader;
};

export const Post = ({ attributes }: PostProps) => {
  return (
    <Styled.Wrapper>
      <ArticleHeader attributes={attributes}></ArticleHeader>
      <HtmlContent html={attributes.content}></HtmlContent>
    </Styled.Wrapper>
  );
};

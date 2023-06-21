import { ArticleHeader } from 'components/ArticleHeader';
import * as Styled from './styles';
import { PostHeader } from 'shared-typed/post-header';
import { HtmlContent } from 'components/HtmlContent';
import { PostContainer } from 'components/PostContainer';

export type PostProps = {
  attributes: PostHeader;
};

export const Post = ({ attributes }: PostProps) => {
  return (
    <Styled.Wrapper>
      <PostContainer size="max">
        <ArticleHeader attributes={attributes}></ArticleHeader>
      </PostContainer>
      <PostContainer size="content">
        <HtmlContent html={attributes.content}></HtmlContent>
      </PostContainer>
    </Styled.Wrapper>
  );
};

import * as Styled from './styles';
import { DiscussionEmbed } from 'disqus-react';

export type CommentsProps = {
  id: string;
  slug: string;
  title: string;
};

export const Comments = ({ id, slug, title }: CommentsProps) => {
  return (
    <Styled.Wrapper>
      <DiscussionEmbed
        shortname="gpt-blog-andre"
        config={{
          url: `https://blog-project-kappa-one.vercel.app/post/${slug}/`,
          identifier: id,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Styled.Wrapper>
  );
};

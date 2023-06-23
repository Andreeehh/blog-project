import { Tags } from 'shared-typed/tags';
import * as Styled from './styles';
import Link from 'next/link';

export type PostsTagsProps = {
  tags?: Tags;
};

export const PostsTags = ({ tags }: PostsTagsProps) => {
  console.log(tags);
  return (
    <Styled.Wrapper>
      tags:
      {(!tags || tags.data.length === 0) && <span>Sem tags</span>}
      {tags &&
        tags.data.length > 0 &&
        tags.data.map((tag) => (
          <span key={tag.id}>
            <Link href={`/tag/${tag.attributes.slug}`}>
              <a>{tag.attributes.displayName}</a>
            </Link>
          </span>
        ))}
    </Styled.Wrapper>
  );
};

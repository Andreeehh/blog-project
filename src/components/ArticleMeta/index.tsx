import Link from 'next/link';
import * as Styled from './styles';

import { Author } from 'shared-typed/author';
import { Categories } from 'shared-typed/categories';
import { formatDate } from 'utils/format-date';

export type ArticleMetaProps = {
  createdAt: string;
  categories?: Categories;
  author?: Author;
};

export const ArticleMeta = ({
  createdAt,
  categories = { data: [] },
  author = undefined,
}: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        {typeof author !== 'undefined' && (
          <>
            <span>Por </span>
            <Link href={`/author/${author.data.attributes.slug}`}>
              <a>{author.data.attributes.displayName}</a>
            </Link>
            <span className="separator"> | </span>
          </>
        )}

        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        {categories && categories.data.length > 0 && (
          <>
            <span className="separator"> | </span>
            <span className="categories">
              {categories.data.map((category) => {
                return (
                  <span key={`article-meta-cat-${category.id}`}>
                    <Link href={`/category/${category.attributes.slug}`}>
                      <a>{category.attributes.displayName}</a>
                    </Link>
                  </span>
                );
              })}
            </span>
          </>
        )}
      </p>
    </Styled.Wrapper>
  );
};

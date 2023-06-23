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
            <a href={`/author/${author.data.attributes.slug}`}>
              {author.data.attributes.displayName}
            </a>
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
                    <a href={`/category/${category.attributes.slug}`}>
                      {category.attributes.displayName}
                    </a>
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

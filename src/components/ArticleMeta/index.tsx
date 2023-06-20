import * as Styled from './styles';

import { Author } from 'shared-typed/author';
import { Categories } from 'shared-typed/categories';
import { formatDate } from 'utils/format-date';

export type ArticleMetaProps = {
  createdAt: string;
  categories: Categories;
  author: Author;
};

export const ArticleMeta = ({
  createdAt,
  categories,
  author,
}: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        <span>Por </span>
        <a href={`/author/${author.data.attributes.slug}`}>
          {author.data.attributes.displayName}
        </a>
        <span className="separator"> | </span>
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
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
      </p>
    </Styled.Wrapper>
  );
};

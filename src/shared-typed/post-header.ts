import { ArticleMetaProps } from 'components/ArticleMeta';
import { StrapiImage } from './strapi-image';
import { Categories } from './categories';
import { Author } from './author';

export type PostHeader = {
  title: string;
  slug: string;
  except: string;
  content: string;
  cover: StrapiImage;
  createdAt: string;
  categories: Categories;
  author: Author;
};

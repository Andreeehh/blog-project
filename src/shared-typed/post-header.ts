import { ArticleMetaProps } from 'components/ArticleMeta';
import { StrapiImage } from './strapi-image';

export type PostHeader = {
  title: string;
  slug: string;
  except: string;
  content: string;
  cover: StrapiImage;
} & ArticleMetaProps;

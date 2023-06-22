import { ArticleMetaProps } from 'components/ArticleMeta';
import { StrapiImage } from './strapi-image';
import { Tags } from './tags';

export type PostHeader = {
  title: string;
  slug: string;
  except: string;
  content: string;
  cover: StrapiImage;
  tags?: Tags;
} & ArticleMetaProps;

import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_QUERIES = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_POST (
    $categorySlug: String
    $postSlug: String
    $postSearch: String
    $authorSlug: String
    $tagSlug: String
    $start: Int = 0
    $limit: Int = 1
    $sort: [String] = ["createdAt:desc"]
  ){
    setting	{
      ...settingEntityResponse
    }
    posts(
      pagination: {
        start: $start
        limit: $limit
      }
      filters: {
        slug: { eq: $postSlug }
        title: {containsi: $postSearch}
        categories: {
          slug: {eq: $categorySlug}
        }
        author: {
          slug: {eq: $authorSlug}
        }
        tags: {
          slug: {eq: $tagSlug}
        }
      }
      sort: $sort
    ) {
      ...postEntityResponseCollection
    }
  }
`;

import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
# Write your query or mutation here
fragment settingEntityResponse on SettingEntityResponse {
  data {
    ...settingEntity
  }
}

fragment settingEntity on SettingEntity {
  id
  attributes {
    ...setting
  }
}

fragment setting on Setting {
  blogName
  blogDescription
  logo {
    ...imageEntityResponse
  }
  menuLink {
    ...menuLink
  }
  text
}

fragment imageEntityResponse on UploadFileEntityResponse {
  data {
    ...imageEntity
  }
}

fragment imageEntity on UploadFileEntity {
  id
  attributes {
    ...image
  }
}

fragment image on UploadFile {
  alternativeText
  url
}

fragment menuLink on ComponentMenuMenuLink {
  id
  link
  text
  newTab
}

fragment postEntityResponseCollection on PostEntityResponseCollection {
  data {
    ...postEntity
  }
}

fragment postEntity on PostEntity {
  id
  attributes {
    ...post
  }
}

fragment post on Post {
  title
  slug
  except
  createdAt
  content
  ...cover
  ...categories
  ...tags
  ...authorPost
}

fragment authorPost on Post	{
  author	{
    ...authorEntityResponse
  }
}

fragment tags on Post	{
  tags	{
    ...tagRelationResponseCollection
  }
}

fragment categories on Post	{
  categories	{
    ...categoryRelationResponseCollection
  }
}

fragment cover on Post {
  cover{
    ...imageEntityResponse
  }
}

fragment categoryRelationResponseCollection on CategoryRelationResponseCollection	{
  data {
    ...categoryEntity
  }
}

fragment categoryEntity on CategoryEntity	{
  id
  attributes	{
    ...category
  }
}

fragment category on Category {
  displayName
  slug
}

fragment tagRelationResponseCollection on TagRelationResponseCollection	{
  data	{
  	...tagEntity
  }
}

fragment tagEntity on TagEntity	{
  id
  attributes	{
    ...tag
  }
}

fragment tag on Tag	{
  displayName
  slug
}

fragment authorEntityResponse on AuthorEntityResponse	{
  data {
    ...authorEntity
  }
}

fragment authorEntity on AuthorEntity	{
  id
  attributes	{
    ...author
  }
}

fragment author on Author {
  displayName
  slug
}


`;

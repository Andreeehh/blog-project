import { LoadPostsVariables, loadPosts } from 'api/load-posts';
import * as Styled from './styles';
import { PostProps } from 'components/Post';
import { PostGrid } from 'components/PostGrid';
import { useState } from 'react';
import { SettingsStrapi } from 'shared-typed/settings-strapi';
import { Base } from 'templates/Base';

export type PostsTemplateProps = {
  setting: SettingsStrapi;
  posts?: {
    data?: PostProps[];
  };
  variables?: LoadPostsVariables;
};

export const PostsTemplate = ({
  setting,
  posts = {},
  variables,
}: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);
    const newVariables = {
      ...stateVariables,
      start: stateVariables.start + stateVariables.limit,
      limit: stateVariables.limit,
    };

    const morePosts = await loadPosts(newVariables);
    if (
      !morePosts ||
      !morePosts.posts ||
      !morePosts.posts.data.length ||
      morePosts.posts.data.length == 0
    ) {
      setNoMorePosts(true);
      return;
    }
    setButtonDisabled(false);
    setStateVariables(newVariables);
    morePosts.posts.data.forEach((post) => {
      statePosts.data.push(post);
    });
    setStatePosts(statePosts);
  };

  return (
    <Base setting={setting}>
      <PostGrid posts={statePosts}></PostGrid>

      {statePosts && statePosts.data.length ? (
        <Styled.ButtonContainer>
          <Styled.Button
            onClick={handleLoadMorePosts}
            disabled={buttonDisabled}
          >
            {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
          </Styled.Button>
        </Styled.ButtonContainer>
      ) : null}
    </Base>
  );
};

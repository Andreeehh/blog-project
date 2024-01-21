import { useEffect } from 'react';
import { PostCard } from 'components/PostCard';
import * as Styled from './styles';
import { PostProps } from 'components/Post';

export type PostGridProps = {
  posts?: {
    data?: PostProps[];
  };
};

export const PostGrid = ({ posts = {} }: PostGridProps) => {
  const handleOnMouseMove = (e: MouseEvent) => {
    const postElements = document.getElementsByClassName('post');
    const postArray = Array.from(postElements);

    for (const cardElement of postArray) {
      const card = cardElement as HTMLDivElement;
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  useEffect(() => {
    const grid = document.getElementById('postGrid');

    if (grid) {
      grid.addEventListener('mousemove', handleOnMouseMove);

      return () => {
        grid.removeEventListener('mousemove', handleOnMouseMove);
      };
    }
  }, []);

  return (
    <Styled.Wrapper id="postGrid">
      {!posts.data ||
        (posts.data.length === 0 && (
          <Styled.NotFound>Nenhum post encontrado aqui =(</Styled.NotFound>
        ))}

      <Styled.Grid>
        {posts.data &&
          posts.data.length > 0 &&
          posts.data.map((post, index) => {
            const transitionDelay = `${3 + (index % 3) * 2}s`;

            return (
              <PostCard
                key={`p1-${post.id}`}
                id={post.id}
                attributes={post.attributes}
                transitionDelay={transitionDelay}
              />
            );
          })}
      </Styled.Grid>
    </Styled.Wrapper>
  );
};

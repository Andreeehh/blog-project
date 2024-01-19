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
  const handleOnMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    for (const card of document.getElementsByClassName('post')) {
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
          posts.data.map((post) => (
            <PostCard
              key={`p1-${post.id}`}
              id={post.id}
              attributes={post.attributes}
            />
          ))}
      </Styled.Grid>
    </Styled.Wrapper>
  );
};

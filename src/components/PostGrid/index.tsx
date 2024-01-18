import { PostCard } from 'components/PostCard';
import * as Styled from './styles';
import { PostProps } from 'components/Post';

export type PostGridProps = {
  posts?: {
    data?: PostProps[];
  };
};

export const PostGrid = ({ posts = {} }: PostGridProps) => {
  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  };
  return (
    <Styled.Wrapper>
      {!posts.data ||
        (posts.data.length == 0 && (
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
              onMouseMove={handleOnMouseMove}
            />
          ))}
      </Styled.Grid>
    </Styled.Wrapper>
  );
};

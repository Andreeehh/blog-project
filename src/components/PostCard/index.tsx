import { PostProps } from 'components/Post';
import * as Styled from './styles';
import Link from 'next/link';
import { Heading } from 'components/Heading';
import { ArticleMeta } from 'components/ArticleMeta';
import { useEffect, useRef, useState } from 'react';

export type PostCardProps = {
  id: string;
  attributes: PostProps['attributes'];
  noTransition?: boolean;
  transitionDelay?: string;
};

export const PostCard = ({
  attributes,
  noTransition,
  transitionDelay,
}: PostCardProps) => {
  // Utilize o hook useRef para referenciar o elemento do post
  const postRef = useRef(null);
  // Utilize o estado para controlar se a classe deve ser adicionada
  const [shouldShow, setShouldShow] = useState(noTransition);

  // Função para verificar se o post está visível na tela
  const isElementVisible = () => {
    if (!postRef.current) return false;

    const rect = postRef.current.getBoundingClientRect();
    return rect.top <= window.innerHeight;
  };

  // Efeito para adicionar a classe quando o post estiver visível
  useEffect(() => {
    const handleScroll = () => {
      if (isElementVisible()) {
        setShouldShow(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Remova o listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Styled.Wrapper
      className={`post  ${shouldShow ? 'show' : ''}`}
      ref={postRef}
      transitionDelay={transitionDelay}
    >
      {/* Restante do seu código... */}
      <Link href={`/post/${attributes.slug}`}>
        <a>
          <Styled.Cover
            src={attributes.cover.data.attributes.url}
            alt={attributes.title}
          />
        </a>
      </Link>

      <Heading as="h3" size="small">
        <Link href={`/post/${attributes.slug}`}>
          <a>{attributes.title}</a>
        </Link>
      </Heading>

      <Styled.Excerpt>{attributes.except}</Styled.Excerpt>
      <ArticleMeta
        createdAt={attributes.createdAt}
        categories={attributes.categories}
        author={attributes.author}
      ></ArticleMeta>
    </Styled.Wrapper>
  );
};

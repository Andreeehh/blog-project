import * as Styled from './styles';
// import ReactMarkdown from 'react-markdown';

export type HtmlContentProps = {
  html: string;
};

export const HtmlContent = ({ html }: HtmlContentProps) => {
  return (
    // <Styled.Container>
    //   <ReactMarkdown>{html}</ReactMarkdown>
    // </Styled.Container>
    <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />
  );
};

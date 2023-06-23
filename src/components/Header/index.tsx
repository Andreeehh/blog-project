import { LogoLink } from 'components/LogoLink';
import * as Styled from './styles';
import { Heading } from 'components/Heading';

export type HeaderProps = {
  blogName: string;
  blogDescription: string;
  logo: string;
  showText: boolean;
};

export const Header = ({
  blogName,
  blogDescription,
  logo,
  showText,
}: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <LogoLink
        text={`${blogName} - ${blogDescription}`}
        srcImg={logo}
        link="/"
        newTab={false}
      />

      {showText && (
        <Styled.Content>
          <Heading size="small" as="h2" colorDark={true}>
            {blogName}
          </Heading>
          <p>{blogDescription}</p>
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};

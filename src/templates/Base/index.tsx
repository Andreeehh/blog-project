import { SettingsStrapi } from 'shared-typed/settings-strapi';
import * as Styled from './styles';
import { Menu } from 'components/Menu';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useRouter } from 'next/router';
import { GoTop } from 'components/GoTop';
import { ToggleTheme } from 'components/ToggleTheme';

export type BaseProps = {
  setting: SettingsStrapi;
  children: React.ReactNode;
};

export const Base = ({ setting, children }: BaseProps) => {
  const router = useRouter();

  return (
    <Styled.Wrapper>
      <ToggleTheme />
      <Menu
        menuLink={setting.data.attributes.menuLink}
        blogName={setting.data.attributes.blogName}
        logo={setting.data.attributes.logo.data.attributes.url}
      />
      <Styled.HeaderContainer>
        <Header
          blogName={setting.data.attributes.blogName}
          blogDescription={setting.data.attributes.blogDescription}
          logo={setting.data.attributes.logo.data.attributes.url}
          showText={true}
        />
      </Styled.HeaderContainer>

      <Styled.SearchContainer>
        <form action="/search/" method="GET">
          <Styled.SearchInput
            type="search"
            placeholder="Encontre posts"
            name="q"
            defaultValue={router?.query?.q || ''}
          />
        </form>
      </Styled.SearchContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={setting.data.attributes.text} />
      </Styled.FooterContainer>
      <GoTop />
    </Styled.Wrapper>
  );
};

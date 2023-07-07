import { SettingsStrapi } from 'shared-typed/settings-strapi';
import * as Styled from './styles';
import { Menu } from 'components/Menu';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useRouter } from 'next/router';
import { GoTop } from 'components/GoTop';
import { ToggleTheme } from 'components/ToggleTheme';
import { useEffect, useRef, useState } from 'react';

import { Cancel, CheckCircleOutline } from '@styled-icons/material-outlined';

export type BaseProps = {
  setting: SettingsStrapi;
  children: React.ReactNode;
};

export const Base = ({ setting, children }: BaseProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router?.query?.q || '');
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [isReady, setIsReady] = useState(true);
  const inputTimeout = useRef(null);

  useEffect(() => {
    if (isReady) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  }, [isReady]);

  useEffect(() => {
    clearTimeout(inputTimeout.current);

    if (router?.query?.q === searchValue) {
      return;
    }

    const q = searchValue;

    if (!q || q.length < 3) {
      return;
    }

    inputTimeout.current = setTimeout(() => {
      setIsReady(false);
      router
        .push({
          pathname: '/search/',
          query: { q: searchValue },
        })
        .then(() => setIsReady(true));
    }, 600);

    return () => clearTimeout(inputTimeout.current);
  }, [searchValue, router]);

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
        <Styled.SearchInput
          type="search"
          placeholder="Encontre posts"
          name="q"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          disabled={searchDisabled}
        />
        {!searchDisabled ? (
          <CheckCircleOutline
            className="search-ok-icon"
            aria-label="Input enabled"
          />
        ) : (
          <Cancel className="search-cancel-icon" aria-label="Input enabled" />
        )}
      </Styled.SearchContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={setting.data.attributes.text} />
      </Styled.FooterContainer>
      <GoTop />
    </Styled.Wrapper>
  );
};

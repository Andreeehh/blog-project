import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './styles';
import { LogoLink } from 'components/LogoLink';
import { MenuLink } from 'components/MenuLink';
import { useState } from 'react';

export type MenuPropsLinks = {
  id: string;
  link: string;
  text: string;
  newTab?: boolean;
};

export type MenuProps = {
  blogName: string;
  logo: string;
  menuLink: MenuPropsLinks[];
};

export const Menu = ({ blogName, logo, menuLink = [] }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(true);

  const handleOpenCLoseMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuVisible((v) => !v);
  };

  return (
    <>
      <Styled.OpenClose
        menuVisible={menuVisible}
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
        onClick={handleOpenCLoseMenu}
      >
        {!menuVisible && <MenuIcon aria-label="OpenMenu" />}
        {menuVisible && <CloseIcon aria-label="OpenMenu" />}
      </Styled.OpenClose>
      <Styled.Wrapper menuVisible={menuVisible} aria-hidden={!menuVisible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink link="/" text={blogName} srcImg={logo} />
          </Styled.Logo>

          {menuLink.map((link) => (
            <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
              {link.text}
            </MenuLink>
          ))}
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};

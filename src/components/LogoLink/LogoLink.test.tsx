import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="olá Mundo" />);
    // componente está dentro de um heading por isso consegue pegar mesmo o olá mundo ser do LogoLink
    const heading = screen.getByRole('heading', { name: 'olá Mundo' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="olá Mundo" srcImg="image.jpg" />,
    );
    const heading = screen.getByRole('heading', { name: 'olá Mundo' });
    // como o LogoLink possui um img dentro dele então tem que usar o firstChild do firstChild
    expect(heading.firstChild.firstChild).toHaveAttribute('src', 'image.jpg');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="olá Mundo" srcImg="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

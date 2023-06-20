import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GoTop } from '.';

describe('<GoTop />', () => {
  it('should render go to top button', () => {
    const { container } = renderTheme(<GoTop />);
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute(
      'href',
      '#',
    );
  });
});

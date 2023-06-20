import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleHeader, ArticleHeaderProps } from '.';
import mock from './mock';

const props: ArticleHeaderProps = mock;

describe('<ArticleHeader />', () => {
  it('should render', () => {
    renderTheme(<ArticleHeader {...props} />);

    expect(
      screen.getByRole('heading', { name: props.attributes.title }),
    ).toBeInTheDocument();
  });
});

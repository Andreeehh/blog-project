import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostCard, PostCardProps } from '.';

import mock from './mock';

const props: PostCardProps = mock;

describe('<PostCard />', () => {
  it('should render a heading, cover and excerpt', () => {
    renderTheme(<PostCard {...props} />);

    expect(
      screen.getByRole('heading', { name: mock.attributes.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: mock.attributes.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(mock.attributes.except)).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: mock.attributes.title })[0],
    ).toHaveAttribute('href', `/post/${mock.attributes.slug}`);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});

import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostsTags, PostsTagsProps } from '.';

import mock from './mock';

const props: PostsTagsProps = mock;

describe('<PostTags />', () => {
  it('should render two tags', () => {
    renderTheme(<PostsTags {...props} />);

    expect(screen.getByText(/Tags:/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('should should match snapshot', () => {
    const { container } = renderTheme(<PostsTags {...props} />);

    expect(container).toMatchSnapshot();
  });
});

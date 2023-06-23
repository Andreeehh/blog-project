import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Base, BaseProps } from '.';

import mock from './mock';

const props: BaseProps = mock;

describe('<Base />', () => {
  it('should render base elements', () => {
    renderTheme(<Base {...props} />);

    expect(screen.getByLabelText('Open or close menu')).toBeInTheDocument();
    expect(
      screen.getByText('<strong>Feito por André Carvalho</strong>'),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Go to top')).toBeInTheDocument();
  });

  it('should render base elements', () => {
    const { container } = renderTheme(<Base {...props} />);
    expect(container).toMatchSnapshot();
  });
});

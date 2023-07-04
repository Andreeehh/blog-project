import { ToggleTheme } from '.';

export default {
  title: 'ToggleTheme',
  component: ToggleTheme,
};

export const Template = (args) => {
  return (
    <div>
      <ToggleTheme {...args} />
    </div>
  );
};

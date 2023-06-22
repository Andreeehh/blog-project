import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu, MenuProps } from '.';

import mock from './mock';

export default {
  title: 'Menu',
  component: Menu,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<MenuProps>;

export const Template: Story<MenuProps> = (args) => {
  return (
    <div style={{ maxWidth: '60rem', margin: '5rem auto', padding: '3.2rem' }}>
      <Menu {...args} />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        sodales ligula in libero. Sed dignissim lacinia nunc.{' '}
      </p>
      <br></br>

      <p>
        Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at
        dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
        nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
        luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris
        ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
        nibh.{' '}
      </p>
      <br></br>

      <p>
        Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Nam nec
        ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing
        diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
        Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
        Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu
        magna luctus suscipit. Sed lectus.{' '}
      </p>
      <br></br>

      <p>
        Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra
        auctor, sem massa mattis sem, at interdum magna augue eget diam.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed
        non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit
        amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel,
        egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices
        ultrices enim. Curabitur sit amet mauris.{' '}
      </p>
      <br></br>

      <p>
        Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer
        lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor.
        Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique,
        dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante.
        Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac,
        facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor,
        cursus quis, aliquet eget, justo. Sed pretium blandit orci.{' '}
      </p>
      <br></br>
    </div>
  );
};

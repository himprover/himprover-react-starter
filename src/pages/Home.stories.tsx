import {Home} from './Home';

export default {
  component: Home,
  title: 'Home',
};

const Template = (args: any) => <Home {...args} />;

export const Default = Template.bind({});

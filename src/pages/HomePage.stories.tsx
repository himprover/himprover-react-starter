import {HomePage} from './HomePage';

export default {
  component: HomePage,
  title: 'HomePage',
};

const Template = (args: any) => <HomePage {...args} />;

export const Default = Template.bind({});

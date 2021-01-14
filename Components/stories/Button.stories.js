import React from 'react';
import { action } from "@storybook/addon-actions";

import Button from '../UI/Button';

require("../../styles/UI/Button/Button.scss");

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Text = () => <Button onClick={action('clicked')}>Hello</Button>

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

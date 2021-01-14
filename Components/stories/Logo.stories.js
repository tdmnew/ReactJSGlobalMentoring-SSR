import React from 'react';

import Logo from '../UI/Logo';

require("../../styles/UI/Logo/Logo.scss");

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const NetflixRoulette = () => <Logo />

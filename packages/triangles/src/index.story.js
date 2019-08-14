
import React from 'react';
import { storiesOf } from '@storybook/react'
import Triangles from '.';

import swinson from './storyimg/swinson.jpg'

import Logo from '@liberaldemocrats/logo'

storiesOf('Triangles', module)
    .add('default', () => <Triangles />)
    .add('with-image', () => <Triangles background={swinson} />)
    .add('with logo', () => <Triangles background={swinson} bottom={<Logo />} />) 
    .add('with strap logo', () => <Triangles background={swinson} bottom={<Logo strap="EXIT BREXIT" />} />) 

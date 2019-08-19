
import React from 'react';
import { storiesOf } from '@storybook/react'
import Triangles from '.';

import Image from 'react-image';   

import swinson from './storyimg/swinson.jpg'
const hero = (<Image
    src={swinson}
/>);


import Logo from '@liberaldemocrats/logo'

storiesOf('Triangles', module)
    .add('default', () => <Triangles />)
    .add('with-image', () => <Triangles background={hero} />)
    .add('with logo', () => <Triangles background={hero} bottom={<Logo />} />) 
    .add('with strap logo', () => <Triangles background={hero} bottom={<Logo strap="EXIT BREXIT" />} />) 

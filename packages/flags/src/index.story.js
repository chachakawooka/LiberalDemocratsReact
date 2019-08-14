
import React from 'react';
import { storiesOf } from '@storybook/react'
import Flag from '.';

storiesOf('Flag', module)
    .add('default', () => <Flag style={{width:'300px',height:'500px'}}/>)
    .add('alternative', () => <Flag alternative={true} style={{width:'300px',height:'500px'}}/>)
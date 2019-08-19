
import React from 'react';
import Image from 'react-image';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Demo from '.';

storiesOf('Demo', module)
    .addDecorator(withKnobs)
    .add('default', () => <Demo  />)
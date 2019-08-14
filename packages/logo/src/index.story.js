
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Logo from '.';

storiesOf('Logo', module)
    .addDecorator(withKnobs)
    .add('default', () => <Logo />)
    .add('scottish', () => <Logo type="Scottish" />)
    .add('welsh', () => <Logo type="Welsh" />)
    .add('with strap', () => {
        const strap = text('strap', 'South West');
        return (<Logo strap={strap} />)
    })
    .add('#REPRESENT', () => <Logo strap="Bolton" />)
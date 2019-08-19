
import React from 'react';
import Image from 'react-image';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const img = (<Image
            src='https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13367/attachments/original/1495014349/card_families.jpg?1495014349'
        />)

import Card from '.';

storiesOf('Card', module)
    .addDecorator(withKnobs)
    .add('default', () => <Card img={img} onClick={function(){alert('clicked')}} hovertext="Fix Our Broken System" linktext="CONSTITUTIONAL & POLITICAL REFORM"  />)
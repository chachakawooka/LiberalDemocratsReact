
import React from 'react';
import Image from 'react-image';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';


import Section from '.';
import Card from '@liberaldemocrats/card'

storiesOf('Section', module)
    .addDecorator(withKnobs)
    .add('default', () => 
        <Section title="Demand Better for Britain">
                    <Card
                        img={
                            <Image
                                src='https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13372/attachments/original/1495011869/card_reform.jpg?1495011869'
                            />
                        }
                        onClick={function () { alert('clicked') }}
                        hovertext="Fix Our Broken System"
                        linktext="CONSTITUTIONAL & POLITICAL REFORM" />
        </Section>

    )
    .add('flipped', () => 
        <Section title="Demand Better for Britain" flipped={true}>
                    <Card
                        img={
                            <Image
                                src='https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13372/attachments/original/1495011869/card_reform.jpg?1495011869'
                            />
                        }
                        onClick={function () { alert('clicked') }}
                        hovertext="Fix Our Broken System"
                        linktext="CONSTITUTIONAL & POLITICAL REFORM" />
        </Section>

    )
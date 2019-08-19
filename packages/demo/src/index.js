import React, { Component } from 'react'
import styles from './index.module.scss'

import Image from 'react-image';
import Logo from '@liberaldemocrats/logo'
import Triangles from '@liberaldemocrats/triangles'
import Card from '@liberaldemocrats/card'

const hero = (<Image
    src='http://www.bolton-libdems.org.uk/userfiles/media/139.59.166.45/1904161159475cb5c3b343bcfbolton.jpeg'
/>);

class Demo extends Component {

    render() {
        return (
            <div>
                <div className={styles.logo} ><Logo strap="Bolton" /></div>
                <Triangles background={hero} bottom={<Logo strap="DEMAND BETTER" />} />

                <div className={styles.manifesto}>

                    <Card
                        img={
                            <Image
                                src='https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13372/attachments/original/1495011869/card_reform.jpg?1495011869'
                            />
                        }
                        onClick={function () { alert('clicked') }}
                        hovertext="Fix Our Broken System"
                        linktext="CONSTITUTIONAL & POLITICAL REFORM" />

                    <Card
                        img={
                            <Image
                                src='https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13370/attachments/original/1495012048/card_world.jpg?1495012048'
                            />
                        }
                        onClick={function () { alert('clicked') }}
                        hovertext="Fight for a better world"
                        linktext="International Affairs" />

                    <Card
                        img={
                            <Image
                                src='https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13367/attachments/original/1495014349/card_families.jpg?1495014349'
                            />
                        }
                        onClick={function () { alert('clicked') }}
                        hovertext="Fix Our Broken System"
                        linktext="CONSTITUTIONAL & POLITICAL REFORM" />

                    <Card
                        img={
                            <Image
                                src='https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13367/attachments/original/1495014349/card_families.jpg?1495014349'
                            />
                        }
                        onClick={function () { alert('clicked') }}
                        hovertext="Fix Our Broken System"
                        linktext="CONSTITUTIONAL & POLITICAL REFORM" />

                    <Card
                        img={
                            <Image
                                src='https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13367/attachments/original/1495014349/card_families.jpg?1495014349'
                            />
                        }
                        onClick={function () { alert('clicked') }}
                        hovertext="Fix Our Broken System"
                        linktext="CONSTITUTIONAL & POLITICAL REFORM" />

                    <Card
                        img={
                            <Image
                                src='https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13367/attachments/original/1495014349/card_families.jpg?1495014349'
                            />
                        }
                        onClick={function () { alert('clicked') }}
                        hovertext="Fix Our Broken System"
                        linktext="CONSTITUTIONAL & POLITICAL REFORM" />

                    <Card
                        img={
                            <Image
                                src='https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13367/attachments/original/1495014349/card_families.jpg?1495014349'
                            />
                        }
                        onClick={function () { alert('clicked') }}
                        hovertext="Fix Our Broken System"
                        linktext="CONSTITUTIONAL & POLITICAL REFORM" />

                    <Card
                        img={
                            <Image
                                src='https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13367/attachments/original/1495014349/card_families.jpg?1495014349'
                            />
                        }
                        onClick={function () { alert('clicked') }}
                        hovertext="Fix Our Broken System"
                        linktext="CONSTITUTIONAL & POLITICAL REFORM" />

                    <Card
                        img={
                            <Image
                                src='https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13367/attachments/original/1495014349/card_families.jpg?1495014349'
                            />
                        }
                        onClick={function () { alert('clicked') }}
                        hovertext="Fix Our Broken System"
                        linktext="CONSTITUTIONAL & POLITICAL REFORM" />

                    <Card
                        img={
                            <Image
                                src='https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13367/attachments/original/1495014349/card_families.jpg?1495014349'
                            />
                        }
                        onClick={function () { alert('clicked') }}
                        hovertext="Fix Our Broken System"
                        linktext="CONSTITUTIONAL & POLITICAL REFORM" />
                </div>
            </div >
        )
    }
}

export default Demo
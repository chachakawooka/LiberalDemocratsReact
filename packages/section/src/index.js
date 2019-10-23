import React, { Component } from 'react'
import styles from '../index.module.scss'

class Section extends Component {

    render() {

        let containerStyle = styles.section;
        if(this.props.flipped){
            containerStyle += " "+styles.flipped;
        }

        return (
            <section className={containerStyle}>
                <div className={styles.title}>
                    <h1>{this.props.title}</h1>
                </div>
                <div className={styles.sectionData}>
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default Section
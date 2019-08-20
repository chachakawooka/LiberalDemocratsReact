import React, { Component } from 'react'
import styles from '../index.module.scss'

class Card extends Component {

    render() {
        return (
            <div className={styles.card} onClick={this.props.onClick}>
                <div className={styles.card__image}>
                    {this.props.img}
                </div>
                <div className={styles.card__info}>
                    <h3>{this.props.hovertext}</h3>
                </div>
                <div className={styles.card__cta}>
                    <a>{this.props.linktext}</a>
                </div>
            </div >
        )
    }
}

export default Card
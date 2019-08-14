import React, { Component } from 'react'
import styles from './index.module.scss'

class Button extends Component{

    render(){
        console.log(styles)
        return(
            <div className={styles.button} test="test">
                {this.props.children}
            </div>
        )
    }
}

export default Button
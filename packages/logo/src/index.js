import React, { Component } from 'react'
import styles from './index.module.scss'

import federal from './images/federal.svg'
import noStrap from './images/no-strap.svg'
import Welsh from './images/welsh.svg'
import Scottish from './images/scottish.svg'

class Logo extends Component {

    render() {

        let logo = federal;

        if (this.props.type == 'Scotish') {
            logo = Scottish;
        }else if(this.props.type == 'Welsh'){
            logo = Welsh;
        }else if (this.props.strap) {
            logo = noStrap;
        }

        return (
            <div className={styles.logo}>
                <img src={logo} />
                {this.props.strap && 
                <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
                    <foreignObject width="100%" height="100%">
                        <small className={styles.logo__strap}>{this.props.strap}</small>
                    </foreignObject>
                </svg>
                }

            </div >
        )
    }
}

export default Logo
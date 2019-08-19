import React, { Component } from 'react'
import styles from './index.module.scss'
import { background } from '@storybook/theming';
import url from '@storybook/api/dist/modules/url';

class Triangles extends Component {

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.background}>
                {this.props.background}
                </div>
                <svg className={styles.Triangles} viewBox="0 0 285 330" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.triangleUp} d="M126.809 77.5L253.5 329.5H0L126.809 77.5Z" fill="#FAA61A" />
                    <path className={styles.triangleDown} d="M155.098 133L86.5 -0.499975L222 -0.499992L155.098 133Z" fill="#151721" />
                    <path className={styles.bar} d="M114.5 -1H86L253.5 329H285L114.5 -1Z" fill="#FAA61A" fill-opacity="0.32" />
                </svg>

                    <div className={styles.bottomContent}>
                        {this.props.bottom}
                    </div>
            </div>
        )
    }
}

export default Triangles
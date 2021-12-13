import * as React from 'react';
import styles from './MtnCompliance.module.scss'

const Cards = ({ title, count }) => {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <h2>{count}</h2>
        </div>
    )
}

export default Cards

import * as React from 'react'
import styles from './MtnCompliance.module.scss'

const Header = () => {
    const name = localStorage.getItem("MyName")
    const email = localStorage.getItem("Email")
    return (
        <div className={styles.formHeader}>
            <div className={styles.title}>
                <h1 style={{ float: "left" }}><b>{name}</b></h1>
                <h4 style={{ float: "right" }}>MTN000000000</h4>
            </div>
            <div className={styles.title}>
                <h5 style={{ float: "left" }}>{email}</h5>
                <h4 style={{ float: "right" }}>05/10/21</h4>
            </div>
        </div>
    )
}

export default Header

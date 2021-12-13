import * as React from 'react'
import styles from './MtnCompliance.module.scss'
import { useHistory } from 'react-router-dom'
const Radio = () => {
    const history = useHistory()
    const single = () => {
        history.push("/complianceUniverse")
    }
    const bulk = () => {
        history.push("/complianceUniverse/bulkEntry")
    }
    return (
        <div>
            <div className={styles.formGrid}>
                <div className={styles.formContainer}>
                    <label ><input type="radio" name="uploadType" onClick={single} /> Single Entry</label>
                </div>
                <div className={styles.formContainer}>
                    <label ><input type="radio" name="uploadType" onClick={bulk} /> Bulk Entry</label>
                </div>
            </div>
        </div>
    )
}

export default Radio

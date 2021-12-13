import * as React from 'react';
import { Link } from 'react-router-dom'
import Cards from '../Cards';
import styles from '../MtnCompliance.module.scss'

const Dashboard = () => {
    return (
        <div>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.headerTitle}>
                    <h2>Welcome to the Complaiance Dashboard</h2>
                </div>
                <div className={styles.headerBtn}>
                    <Link className={styles.mtnBtn} to={'/complianceUniverse'}>New Compliance Attesation</Link>
                    <Link className={styles.mtnBtn} to={'/complianceUniverse'}>New Compliance Universe</Link>
                </div>
            </div>
            {/* End of Header */}

            {/* Contents */}
            <div className={styles.contents}>
                <div className={styles.grid}>

                    {/* Cards */}
                    <Cards title="Number of Compliance Obligations Status" count="15" />
                    <Cards title="Number of Compliant High Risk Obligations" count="15" />
                    <Cards title="Number of Partially High Risk Obligations" count="15" />
                    <Cards title="Number of Compliant Medium Risk Obligations" count="15" />
                    <Cards title="Number of Partially Compliant Medium Risk Obligations" count="15" />
                    <Cards title="Number of Compliant Low Risk Obligations" count="15" />
                    <Cards title="Number of Partially Compliant Low Risk Obligations" count="15" />

                    {/* End of Cards */}


                </div>
            </div>
            {/* End of Contents */}

        </div>
    )
}

export default Dashboard

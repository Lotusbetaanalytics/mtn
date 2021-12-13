import * as React from 'react'
import styles from '../MtnCompliance.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Radio from '../Radio'
import Header from '../Header'

const ComplianceUniverse = () => {
    const [regulatoryBody, setRegulatoryBody] = useState("")
    const [regulatoryAct, setRegulatoryAct] = useState("")
    const [applicationSection, setApplicationSection] = useState("")
    return (
        <div>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.headerBtn}>
                    <Link className={`${styles.mtnBtn} ${styles.whiteBtn}`} to={'/'}>Cancel Form</Link>
                </div>
            </div>
            {/* End of Header */}

            {/* Form Content */}
            <div className={styles.formContent}>
                {/* formHeader */}
                <Header />
                {/* formHeader */}

                {/* Form */}
                <div className={styles.form}>

                    <form>
                        {/* Radio */}
                        <Radio />

                        <h3><b>Entry Details</b></h3>
                        <div className={styles.formGrid}>
                            <div className={styles.formContainer}>
                                <input type="text" placeholder="Regulatory Body" onChange={(e) => setRegulatoryBody(e.target.value)} />
                            </div>
                            <div className={styles.formContainer}>
                                <input type="text" placeholder="Regulatory Act" onChange={(e) => setRegulatoryAct(e.target.value)} />
                            </div>
                            <div className={styles.formContainer}>
                                <input type="text" placeholder="Application Section" onChange={(e) => setApplicationSection(e.target.value)} />
                            </div>
                            <div className={styles.formContainer}>
                                <input type="text" placeholder="Regulation" onChange={(e) => setApplicationSection(e.target.value)} />
                            </div>
                            <div className={styles.formContainer}>
                                <select onChange={(e) => setApplicationSection(e.target.value)}>
                                    <option>Regulation</option>
                                </select>
                            </div>
                            <div className={styles.formContainer}>
                                <input type="text" placeholder="Sanction" onChange={(e) => setApplicationSection(e.target.value)} />
                            </div>
                            <div className={styles.textContainer}>
                                <textarea placeholder="Obligation" onChange={(e) => setApplicationSection(e.target.value)}></textarea>
                            </div>
                            <div className={styles.textContainer}>
                                <textarea placeholder="Regulatory Requirements" onChange={(e) => setApplicationSection(e.target.value)}></textarea>
                            </div>
                            <div className={styles.formContainer}>
                                <input type="text" placeholder="Effective Date" onChange={(e) => setApplicationSection(e.target.value)} />
                            </div>
                            <div className={styles.formContainer}>
                                <input type="text" placeholder="Ammendment Date" onChange={(e) => setApplicationSection(e.target.value)} />
                            </div>
                            <div className={styles.formContainer}>
                                <select onChange={(e) => setApplicationSection(e.target.value)}>
                                    <option>Frequency of Compliance</option>
                                </select>
                            </div>
                            <div className={styles.formContainer}>
                                <input type="text" placeholder="Due Date for Trigger" onChange={(e) => setApplicationSection(e.target.value)} />
                            </div>
                            <div className={styles.formContainer}>
                                <select onChange={(e) => setApplicationSection(e.target.value)}>
                                    <option>Level</option>
                                </select>
                            </div>
                            <div className={styles.formContainer}>
                                <select onChange={(e) => setApplicationSection(e.target.value)}>
                                    <option>State</option>
                                </select>
                            </div>
                            <div className={styles.formContainer}>
                                <select onChange={(e) => setApplicationSection(e.target.value)}>
                                    <option>Division</option>
                                </select>
                            </div>
                            <div className={styles.formContainer}>
                                <select onChange={(e) => setApplicationSection(e.target.value)}>
                                    <option>Department</option>
                                </select>
                            </div>
                            <div className={styles.formContainer}>
                                <input type="text" placeholder="Accountable Officer" onChange={(e) => setApplicationSection(e.target.value)} />
                            </div>
                            <div className={styles.formContainer}>
                                <input type="text" placeholder="Accountable Officer" onChange={(e) => setApplicationSection(e.target.value)} />
                            </div>
                            <div className={styles.formContainer}>
                                <select onChange={(e) => setApplicationSection(e.target.value)}>
                                    <option>Compliance Status</option>
                                </select>
                            </div>
                            <div className={styles.formContainer}>
                                <select onChange={(e) => setApplicationSection(e.target.value)}>
                                    <option>Priority Ratings</option>
                                </select>
                            </div>
                            <div className={styles.formContainer}>
                                <input type="text" placeholder="Upload" onChange={(e) => setApplicationSection(e.target.value)} />
                            </div>

                        </div>

                        <div className={styles.rows}>
                            <div className={styles.grids}>
                                <div className={styles.rowCard} style={{ paddingTop: "1rem" }}>
                                    <Link className={`${styles.mtnBtn} ${styles.whiteBtn}`} to={'/'} >Cancel</Link>



                                </div>

                                <div className={styles.rowCard}>
                                    <button className={styles.mtnBtn}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>



                </div>
                {/* End of Form */}

            </div>
            {/* End of Form Content */}
        </div>
    )
}

export default ComplianceUniverse

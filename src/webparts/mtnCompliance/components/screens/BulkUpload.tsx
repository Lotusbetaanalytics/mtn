import * as React from 'react'
import styles from '../MtnCompliance.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { BsFileEarmarkArrowUp, BsUpload } from "react-icons/bs";
import Header from '../Header';

const BulkUpload = () => {

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

                    {/* Radio */}

                    <div className={styles.circle}><BsFileEarmarkArrowUp /></div>

                    <div className={styles.center}>
                        <div className={styles.uploadWrapper}>
                            <button className={styles.uploadBtn}><BsUpload /> &nbsp;Choose a file for Upload</button>
                            <input type="file" name="myfile" />
                        </div>
                    </div>
                    <p style={{ textAlign: "center" }}>Download a Bulk default template Here</p>


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
                </div>
                {/* End of Form */}

            </div>
            {/* End of Form Content */}
        </div>
    )
}

export default BulkUpload

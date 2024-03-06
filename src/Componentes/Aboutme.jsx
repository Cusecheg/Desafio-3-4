import styles from './Aboutme.module.css';



function Aboutme({title,year1, year2, textYear1, textYear2}) {
    return (
        <div className={styles.aboutme} id='Aboutme'>
            <div>
                <h1>{title}</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.containerLineTime}>

                    <div className={styles.years}>
                        <div>{year1}</div>
                        <div>{year2}</div>
                    </div>

                    <div className={styles.lineTime}>
                        <div className={styles.node}></div>
                        <div className={styles.node}></div>
                    </div>
                </div>
            </div>
            <div className={styles.containerTextLineTime}>
                <div className={styles.textLineTime}>
                    <div>{textYear1}</div>
                    <div>{textYear2}</div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;
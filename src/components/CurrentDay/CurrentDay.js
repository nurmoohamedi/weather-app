import styles from "./CurrentDay.module.scss"

const CurrentDay = ({weekday, date, location, temperature, weatherIcon, weatherDescription}) => {
    return (
        <div className={styles.forecast__day}>
            {temperature > 16
                ? (
                    <>
                        <div className={styles.forecast__day_warm_bg}></div>
                        <div className={styles.forecast__day_warm_overlay}></div>
                    </>
                ) : (
                    <>
                        <div className={styles.forecast__day_bg}></div>
                        <div className={styles.forecast__day_overlay}></div>
                    </>
                )
            }
            <div className={styles.forecast__day_header}>
                <h2 className="fw-bold mb-1">{weekday}</h2>
                <p className="mb-0">{date}</p>
                <p className="fw-bold">{location}</p>
            </div>
            <div className={styles.forecast__day_footer}>
                <img src={weatherIcon} alt="weatherIcon"/>
                <h2 className="fw-bold mt-1">{temperature} °C</h2>
                <p className="fw-lighter">{weatherDescription}</p>
            </div>
        </div>
    )
}

export default CurrentDay;
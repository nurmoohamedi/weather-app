import styles from "./UpcomingDaysForecast.module.css"

const imgUrlBase = 'https://www.metaweather.com/static/';

const UpcomingDaysForecastItem = ({ imgUrl, temperature, weekday }) => {
    return (
        <li className=" d-flex flex-column justify-content-center align-items-center">
            <img className="mb-2 mt-2" width="30" src={`${imgUrlBase}img/weather/${imgUrl}.svg`} alt=""/>
            <p className="mb-2 fw-bold">{weekday}</p>
            <p className="mb-2 fw-bold">{temperature}&deg;</p>
        </li>
    )
}

const UpcomingDaysForecast = ({ days }) => {
    return (
        <ul className={styles.box}>
            {days.map(day => (
                <UpcomingDaysForecastItem key={day.weekday} {...day}/>
            ))}
        </ul>
    )
}

export default UpcomingDaysForecast;
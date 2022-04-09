import styles from "./CurrentDayDescription.module.css"
import CurrentDayDescriptionItem from "./CurrentDayDescriptionItem";

const CurrentDayDescription = ({forecast}) => {
  return (
      <div className={styles.description}>
          <div className="d-flex flex-column">
              {
                  forecast.map(item => (
                      <CurrentDayDescriptionItem key={item.name} {...item}/>
                  ))
              }
          </div>
      </div>
  )
}

export default CurrentDayDescription;
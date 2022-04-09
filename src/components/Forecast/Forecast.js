import {Col, Row} from "react-bootstrap";
import CurrentDay from "../CurrentDay/CurrentDay";
import CurrentDayDescription from "../CurrentDayDescription/CurrentDayDescription";
import UpcomingDaysForecast from "../UpcomingDaysForecast/UpcomingDaysForecast";

const Forecast = ({ forecast }) => {
  return (
      <div className="forecast">
          <Row>
              <Col xs={12} sm={12} md={6} lg={4}>
                    <CurrentDay {...forecast.currentDay}/>
              </Col>
              <Col xs={12} sm={12} md={6} lg={8} className="d-flex flex-column justify-content-between">
                    <CurrentDayDescription forecast={forecast.currentDayDetails}/>
                    <UpcomingDaysForecast days={forecast.upcomingDays}/>
              </Col>
          </Row>
      </div>
  )
}

export default Forecast;
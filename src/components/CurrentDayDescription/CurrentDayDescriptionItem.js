
const CurrentDayDescriptionItem = ({ name, value, unit}) => {
  return (
      <div className="d-flex justify-content-between">
          <p className="mb-0 fw-bold text-uppercase">
              {name}
          </p>
          <p className="mb-0">
              {value} {unit}
          </p>
      </div>
  )
}

export default CurrentDayDescriptionItem;
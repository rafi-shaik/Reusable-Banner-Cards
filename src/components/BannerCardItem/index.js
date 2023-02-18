// Write your code here.

import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <div>
        <h1 className="heading"> {headerText} </h1>
        <p className="description"> {description} </p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default Card

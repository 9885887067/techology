// Write your code here.
import 'index.css'
import './App.js'
const CardItem = props => {
  const {cardItem} = props
  const {title, description, imgUrl, className} = cardItem
  return (
    <li className={`card ${className}`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-para">{description}</p>
      <div className="card-image">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem

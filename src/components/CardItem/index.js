// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={className}>
      <h1 className="heading">{title}</h1>
      <p className="para">{description}</p>
      <div className="img-container">
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}
export default CardItem

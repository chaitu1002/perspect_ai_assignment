import {Component} from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import {IoMdArrowDropright} from 'react-icons/io'
import Header from '../Header'
import Colors from '../Colors'
import SocialMedia from '../SocialMedia'
import './index.css'

const colors = [
  {
    id: 1,
    color: '#000000',
  },
  {
    id: 2,
    color: '#F3F3F3',
  },
  {
    id: 3,
    color: '#7A3050',
  },
]

const sizeTable = [
  {
    id: 1,
    size: 48,
  },
  {
    id: 2,
    size: 49,
  },
  {
    id: 3,
    size: 50,
  },
  {
    id: 4,
    size: 51,
  },
  {
    id: 5,
    size: 52,
  },
]

class Products extends Component {
  state = {currentColor: 1, currentSize: 48, quantity: 1}

  buttonClicked = id => {
    this.setState({currentColor: id})
  }

  sizeChanged = event => {
    this.setState({currentSize: event.target.value})
  }

  minusButton = () => {
    this.setState(prevState => ({quantity: prevState.quantity - 1}))
  }

  plusButton = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  render() {
    const {currentColor, currentSize, quantity} = this.state
    return (
      <div className="large-screen-container">
        <div className="left-container">
          <div className="large-color-container">
            <h1 className="large-screen-text">MIKE</h1>
            <img
              className="large-screen-shoe-image"
              src="https://res.cloudinary.com/chaitu1002/image/upload/v1648480199/Image_1_qktdql.png"
              alt="shoe"
            />
            <SocialMedia />
          </div>
        </div>
        <div className="product-main-container">
          <Header />
          <p className="shoe-type">
            Man <IoMdArrowDropright className="arrow-icon" /> Shoes{' '}
            <IoMdArrowDropright className="arrow-icon" />{' '}
            <span className="span-text">Gray Running Sneakers</span>
          </p>
          <h1 className="shoe-heading">
            Black Running <br className="break" /> Sneakers
          </h1>
          <img
            className="shoe-image"
            src="https://res.cloudinary.com/chaitu1002/image/upload/v1648461636/Image_dy2wj3.png"
            alt="shoe"
          />
          <div className="star-image-container">
            <img
              className="star-image"
              src="https://res.cloudinary.com/chaitu1002/image/upload/v1648461851/Stars_bwtjer.png"
              alt="star"
            />
            <p className="votes-text">18 votes </p>
          </div>
          <div className="cost-container">
            <p className="cost">₹16.959.99</p>
            <p className="main-cost">₹20.069.994</p>
          </div>
          <p className="shoe-description">
            Neoprene and membrane boots. Rubber insert with lacing over foot and
            back on heel. Lining and insole of the membrane
          </p>
          <div className="color-size-quanity-container">
            <div className="color-container">
              <p className="color-text">COLOR</p>
              <div className="three-color-container">
                {colors.map(eachItem => (
                  <Colors
                    key={eachItem.id}
                    colorValue={eachItem}
                    currentColor={currentColor}
                    buttonClicked={this.buttonClicked}
                  />
                ))}
              </div>
            </div>
            <div className="color-container">
              <p className="color-text">SIZE</p>
              <div className="three-color-container">
                <select
                  className="select-element"
                  value={currentSize}
                  onChange={this.sizeChanged}
                >
                  {sizeTable.map(eachItem => (
                    <option key={eachItem.id} value={eachItem.size}>
                      {eachItem.size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="color-container">
              <p className="color-text">QUANTITY</p>
              <div className="three-color-container">
                <button
                  onClick={this.minusButton}
                  type="button"
                  className="sign-button"
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  onClick={this.plusButton}
                  type="button"
                  className="sign-button"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="cart-and-wishlist-container">
            <button type="button" className="add-to-cart-button">
              <FaShoppingCart className="cart-icon-product" /> Add to Cart.
            </button>
            <button type="button" className="wishlist-button">
              <AiOutlineHeart className="heart-icon-product" /> Save to Wishlist
            </button>
          </div>
          <p className="bottom-description">
            Standard delivery in 2-4 days or Premium delivery in 2-4 hours
          </p>
          <div className="social-media">
            <SocialMedia />
          </div>
        </div>
      </div>
    )
  }
}

export default Products

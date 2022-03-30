import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaShoppingCart, FaBars} from 'react-icons/fa'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h1 className="header-heading">MIKE</h1>
        <div className="icons-container">
          <div className="input-element">
            <input
              className="search-input"
              type="search"
              placeholder="Search"
            />
            <AiOutlineSearch className="search-icon" />
          </div>
          <AiOutlineSearch className="search-icon-small" />
          <div className="cart-icon-container">
            <div className="cart-and-value-container">
              <FaShoppingCart className="search-icon" />
              <div className="cart-value-container">
                <p className="cart-value">0</p>
              </div>
            </div>
            <FaBars className="search-icon" />
          </div>
        </div>
      </div>
    )
  }
}

export default Header

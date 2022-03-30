import {TiTick} from 'react-icons/ti'
import Button from './styled'
import './index.css'

const Colors = props => {
  const {colorValue, currentColor, buttonClicked} = props
  const {id, color} = colorValue
  const colorButton = () => {
    buttonClicked(id)
  }
  return (
    <Button onClick={colorButton} className="button-color" bgColor={color}>
      {id === currentColor && <TiTick className="tick-mark" />}
    </Button>
  )
}

export default Colors

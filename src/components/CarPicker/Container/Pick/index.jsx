import React, {PropTypes, PureComponent} from 'react'
import classNames from 'classnames'

const pickTexts = {
  'batmobil': '90s Batmobil',
  'atruck': 'A-team Truck'
}

const buttonTexts = {
  'batmobil': 'Batman!',
  'atruck': 'Hannibal!'
}

export default class CarPickerPick extends PureComponent {
  static propTypes = {
    pickCarHandler: PropTypes.func.isRequired,
    pickerClass: PropTypes.string.isRequired
  }

  render() {
    const {pickerClass} = this.props
    const carClass = classNames(`car-picker-pick__${pickerClass}`)

    return (
      <div className='car-picker-pick'>
        {/* Actuall car selection box */}
        <div className='car-picker-pick__box'>
          <div className='car-picker-pick__graphic'>
            <div className={carClass} />
          </div>
          <div className='car-picker-pick__text'>
            {pickTexts[pickerClass]}
          </div>
        </div>
        <a tabIndex='0' className='car-picker-pick__button' onClick={this.handleButtonClick}>
          {buttonTexts[pickerClass]}
        </a>
      </div>
    )
  }

  handleButtonClick = () => {
    const {pickCarHandler, pickerClass} = this.props
    pickCarHandler(pickerClass)
  }
}
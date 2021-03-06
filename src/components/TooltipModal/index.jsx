import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Modal from 'components/Modal'

export default class TooltipModal extends PureComponent {
  static propTypes = {
    tooltipText: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    modalClass: PropTypes.string,
    additionalClass: PropTypes.string,
    enterCallback: PropTypes.func
  }

  state = {
    showModal: false
  }

  render() {
    const {tooltipText, additionalClass, enterCallback, modalClass, children} = this.props
    const tooltipClass = classNames('tooltip', {
      [additionalClass]: additionalClass
    })

    return (
      <Fragment>
        <button className={tooltipClass} onClick={this.showModal}>
          <div className='tooltip__exclamation'>!</div>
          <div className='tooltip__text-box'>
            <div className='tooltip__text'>{tooltipText}</div>
          </div>
          <div className='tooltip__arrow' />
        </button>
        {this.state.showModal && (
          <Modal onExited={this.removeModal} onEnter={enterCallback} modalClass={modalClass}>
            {children}
          </Modal>
        )}
      </Fragment>
    )
  }

  showModal = () => {
    this.setState({showModal: true})
  }

  removeModal = () => {
    this.setState({showModal: false})
  }
}

import React, { Component } from 'react'
import { backgroundIcons } from '../../image-constants'
import { TweenMax } from 'gsap'

const backgroundIconArr = backgroundIcons

class BackgroundIcons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screenDimensions: {
        vw: typeof window !== 'undefined' ? window.innerWidth - 200 : null,
        vh: typeof window !== 'undefined' ? window.innerHeight - 200 : null,
      },
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  generateRandomPosition = () => {
    return {
      left:
        Math.floor(Math.random() * (this.state.screenDimensions.vw - 1 + 1)) +
        1,
      right:
        Math.floor(Math.random() * (this.state.screenDimensions.vw - 1 + 1)) +
        1,
      top:
        Math.floor(Math.random() * (this.state.screenDimensions.vh - 1 + 1)) +
        1,
      bottom:
        Math.floor(Math.random() * (this.state.screenDimensions.vh - 1 + 1)) +
        1,
    }
  }

  animateBackgroundIcon = index => {
    TweenMax.to('#backgroundIcon' + index, 20, {
      top: this.generateRandomPosition().top,
      bottom: this.generateRandomPosition().bottom,
      left: this.generateRandomPosition().left,
      right: this.generateRandomPosition().right,
    })
  }

  componentDidMount() {
    this.initAnimateBackgroundIcon()
    typeof window !== 'undefined' &&
      window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    clearInterval(this.changeAnimateBackgroundIcon)
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  initAnimateBackgroundIcon = () => {
    backgroundIconArr.forEach((backgroundIconItem, index) => {
      this.animateBackgroundIcon(index)
    })
    this.intervalAnimateBackgroundIcon()
  }

  intervalAnimateBackgroundIcon = () => {
    backgroundIconArr.forEach((backgroundIconItem, index) => {
      this.changeAnimateBackgroundIcon = setInterval(
        () => this.animateBackgroundIcon(index),
        20000
      )
    })
  }

  updateWindowDimensions = () => {
    this.setState({
      screenDimensions: {
        vw: typeof window !== 'undefined' ? window.innerWidth - 100 : 0,
        vh: typeof window !== 'undefined' ? window.innerHeight - 100 : 0,
      },
    })
  }

  render() {
    return backgroundIconArr.map((backgroundItem, key) => (
      <img
        alt="background icon"
        key={key}
        src={backgroundItem}
        id={`backgroundIcon` + key}
        style={{
          width: '100px',
          height: '100px',
          position: 'absolute',
          top: this.generateRandomPosition().top,
          bottom: this.generateRandomPosition().bottom,
          left: this.generateRandomPosition().left,
          right: this.generateRandomPosition().right,
        }}
      />
    ))
  }
}

export default BackgroundIcons

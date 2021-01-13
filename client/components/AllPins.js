import React, {Component} from 'react'
import PinCard from './PinCard'
import {connect} from 'react-redux'
import {getPins} from '../store/pins'

class AllPins extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getPins()
  }
  catch(err) {
    console.log(err)
  }

  render() {
    const {pins} = this.props
    console.log(pins)
    return <div>{pins.map(pin => <PinCard key={pin.id} pin={pin} />)}</div>
  }
}

const mapState = state => ({pins: state.pins})

const mapDispatch = dispatch => ({
  getPins: () => dispatch(getPins())
})

export default connect(mapState, mapDispatch)(AllPins)

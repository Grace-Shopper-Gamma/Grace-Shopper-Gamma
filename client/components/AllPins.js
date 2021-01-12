import React from 'react'

class AllPins extends React.Component {
  componentDidMount() {
    this.props.getPins()
  }
  catch(err) {
    console.log(err)
  }

  render() {
    const {pins} = this.props

    return <div>{pins.map(pin => <PinCard key={pin.id} pin={pin} />)}</div>
  }
}

export default AllPins

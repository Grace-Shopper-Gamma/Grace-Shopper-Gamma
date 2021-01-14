import React from 'react'
import {connect} from 'react-redux'
import StickerCard from './StickerCard'
import {getStickers} from '../store/stickers'

class AllStickers extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getStickers()
    // love the console.logs - just make sure to clean them up before merging to master
    console.log('WHATTTUP')
  }
  catch(err) {
    console.log(err)
  }

  render() {
    const {stickers} = this.props
    console.log('props', this.props)
    console.log('stickers', stickers)

    return (
      <div>
        {stickers.map(sticker => (
          <StickerCard key={sticker.id} sticker={sticker} />
        ))}
      </div>
    )
  }
}

const mapState = state => ({stickers: state.stickers})

const mapDispatch = dispatch => ({
  getStickers: () => dispatch(getStickers())
})

export default connect(mapState, mapDispatch)(AllStickers)

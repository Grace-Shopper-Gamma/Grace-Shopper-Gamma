import React from 'react'
import {connect} from 'react-redux'
import StickerCard from './StickerCard'
import {getStickers} from '../store/stickers'

class AllStickers extends React.Component {
  componentDidMount() {
    this.props.getStickers()
  }
  catch(err) {
    console.log(err)
  }

  render() {
    const {stickers} = this.props
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

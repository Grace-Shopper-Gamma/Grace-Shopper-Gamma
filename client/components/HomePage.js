import React, {Component} from 'react'

export class HomePage extends Component {
  render() {
    return (
      <div className="parallax">
        <div className="bgimg-1">
          <div className="caption">
            <span className="border" id="title">
              Stick & Pin
            </span>
          </div>
        </div>
        <div id="div1">
          <h3 id="h3-1">Express Yourself</h3>
          <p>
            No matter who you are, we want you to express yourself. Don't let
            the past hold you back. Charge into the future with boldness! Our
            wide variety of stick-on and pin-on accoutrements are the best
            accessory to say, "I've got this."
          </p>
        </div>
        <div className="bgimg-2">
          <div className="caption">
            <span className="border" id="span1">
              EMBRACE YOURSELF
            </span>
          </div>
        </div>
        <div id="div2">
          <div id="div3">
            <p>
              “There are only two ways to live your life. One is as though
              nothing is a miracle. The other is {''}
              <span className="strikethrough">
                as though everything is a miracle
              </span>{' '}
              to buy a bunch of stickers and pins." ― Albert Einstein
            </p>
          </div>
        </div>
        <div className="bgimg-3">
          <div className="caption">
            <span className="border" id="span2">
              TREAT YOURSELF
            </span>
          </div>
        </div>
        <div id="div4">
          <div id="div5">
            <p>
              "If life gives you lemons, put them aside and go order stickers
              and pins."
            </p>
          </div>
        </div>
        <div className="bgimg-1">
          <div className="caption">
            <span className="border">EXPRESS YOURSELF.</span>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage

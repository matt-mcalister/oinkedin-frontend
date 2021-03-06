import React from 'react'


const PenBackground = () => {
  return(
    <div id="the-pen">

      <div id="top-stuff">
        <img id="top-bar" src={require("../images/PigPen-long.svg")} alt="top-bar"/>
        <img id="post-mid-top" src={require("../images/PigPen_post-mid-top.svg")} alt="post-mid-top"/>
      </div>

      <div id="bottom-stuff">
        <img id="bottom-bar" src={require("../images/PigPen-long.svg")} alt="bottom-bar"/>
        <img id="post-mid-bottom" src={require("../images/PigPen_post-mid-bottom.svg")} alt="post-mid-bottom"/>
      </div>

      <div id="left-stuff">
        <svg id="left-bar" height="97vh" width="12%">
          <rect x="1%" y="1%" width="100%" height="100%"
          style={{fill: "rgb(104,69,43)", stroke: "black", "stroke-width": 5}}/>
        </svg>
        <svg id="left-bar-2" height="97vh" width="12%">
          <rect x="1%" y="1%" width="100%" height="100%"
          style={{fill: "rgb(104,69,43)", stroke: "black", "stroke-width": 5}}/>
        </svg>
        <img id="post-mid-left" src={require("../images/PigPen_post-mid-left.svg")} alt="post-mid-left"/>
      </div>

      <div id="right-stuff">
        <svg id="right-bar" height="97vh" width="12%">
          <rect x="1%" y="1%" width="100%" height="100%"
          style={{fill: "rgb(104,69,43)", stroke: "black", "stroke-width": 5}}/>
        </svg>
        <svg id="right-bar-2" height="97vh" width="12%">
          <rect x="1%" y="1%" width="100%" height="100%"
          style={{fill: "rgb(104,69,43)", stroke: "black", "stroke-width": 5}}/>
        </svg>
        <img id="post-mid-right" src={require("../images/PigPen_post-mid-right.svg")} alt="post-mid-right"/>
      </div>

      <img id="post-corn-bl" src={require("../images/PigPen_post-corn-bl.svg")} alt="post-corn-bl"/>
      <img id="post-corn-tl" src={require("../images/PigPen_post-corn-tl.svg")} alt="post-corn-tl"/>
      <img id="post-corn-br" src={require("../images/PigPen_post-corn-br.svg")} alt="post-corn-br"/>
      <img id="post-corn-tr" src={require("../images/PigPen_post-corn-tr.svg")} alt="post-corn-tr"/>

      <div id="grass"></div>
      </div>
  )
}

export default PenBackground

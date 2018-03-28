import React, { Component } from 'react'
import timeAgo from '../utils/timeAgo'
import addS from '../utils/addS'
import getHost from '../utils/getHost'

class Item extends Component {
  handleClick () {
    if (this.props.index !== 0) {
      this.props.upVote(this.props.index)
    }
  }

  render () {
    let item = this.props.item
    let index = this.props.index
    return (
      <li key={index} className="item">
        <span className="count">{index + 1}</span>
        <span className="upvote" onClick={this.handleClick.bind(this)}></span>
        <a href={item.url} className="title">{item.title}</a>
        {item.url ? (<span className="host">({getHost(item.url)})</span>) : ''}
        <br/>
        <span className="meta">
          <span className="points_count">{addS(item.score, 'point')}</span>
          <span className="create_by">by {item.by}</span>
          <span className="time">{timeAgo(item.time)}</span>
          <span className="comments_count">{addS(item.descendants, 'comment')}</span>
        </span>
      </li>
    )
  }
}

export default Item
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import addS from '../utils/addS'

class Item extends Component {
  static propTypes = {
    upVote: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  }

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
        <span className="upvote" onClick={this.handleClick.bind(this)}/>
        <a href={item.url} className="title">{item.title}</a>
        {item.domain ? <span className="host">({item.domain})</span> : ''}
        <br/>
        <span className="meta">
          <span className="points_count">{addS(item.points, 'point')}</span>
          <span className="create_by">by {item.user}</span>
          <span className="time">{item.time_ago}</span>
          <span className="comments_count">{addS(item.comments_count, 'comment')}</span>
        </span>
      </li>
    )
  }
}

export default Item
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import config from '../utils/config'
import ajax from '../utils/ajax'

class List extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  _loadItems () {
    ajax('GET', `${config.baseUrl}/news?page=${this.props.page}`)
      .then((res) => {
        let items = JSON.parse(res)
        this.setState({
          items: items
        })
      })
  }

  componentWillMount () {
    this._loadItems()
  }

  handleUpVote (index) {
    let items = this.state.items
    let t = items[index - 1]
    items[index - 1] = items[index]
    items[index] = t
    this.setState({
      items: items
    })
  }

  render () {
    let items = this.state.items.map((item, index) => {
      return (
        <Item upVote={this.handleUpVote.bind(this)} item={item} index={index} key={index}/>
      )
    })
    if (JSON.stringify(this.state.items) === '[]') {
      return (
        <div className="load">loading...</div>
      )
    }
    return (
      <ul className="list">
        {items}
      </ul>
    )
  }
}

export default List
import React, { Component } from 'react'
import Item from './Item'
import config from '../utils/config'
import ajax from '../utils/ajax'

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount () {
    ajax('GET', `${config.baseUrl}/topstories.json`)
      .then((res) => {
        return Promise.all(
          JSON.parse(res).map(item => ajax('GET', `${config.baseUrl}/item/${item}.json`))
        )
      })
      .then((items) => {
        items = items.map(item => JSON.parse(item))
        this.setState({
          items: items
        })
      })
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
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, Media } from 'react-bootstrap'
import moment from 'moment'

moment.locale('sv')

class Message extends Component {

  render () {
    return (
      <Media className='message'>
        <Media.Left>
          <Image
            width={56}
            height={56}
            src={this.props.imageUrl}
            circle
          />
        </Media.Left>
        <Media.Body>
          <Media.Heading>{this.props.username} <small>{moment(this.props.timestamp).calendar()}</small></Media.Heading>
          <p>{this.props.text}</p>
          {this.props.data.image && <Image className='image' src={this.props.data.image}/>}
        </Media.Body>
      </Media>
    )
  }
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  timestamp: PropTypes.number,
  data: PropTypes.object
}

Message.defaultProps = {
  username: 'Anonym',
  imageUrl: 'public/images/anon.png',
  timestamp: 0,
  data: {}
}

export default Message

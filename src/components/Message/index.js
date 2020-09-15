import React from 'react'
import { Alert } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Message = ({ message, close }) => {
  const isMessageAvailable = !!message

  if (isMessageAvailable) {
    const { title, body, variant } = message
    return (
      <div>
        <Alert variant={variant} onClose={close} dismissible>
          <Alert.Heading>
            {title}
          </Alert.Heading>
          <p>{body}</p>
        </Alert>
      </div>
    )
  }
  return <></>
}

Message.propTypes = {
  message: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
    variant: PropTypes.oneOf(['info', 'danger']).isRequired
  }),
  close: PropTypes.func.isRequired
}

export default Message

import React from 'react'
import PropTypes from 'prop-types'
export default function PropsValidation(props) {
  return (
    <div>PropsValidation {props.name}</div>
  )
}
PropsValidation.propTypes={name:PropTypes.string}

import React from 'react'
import { Row, UncontrolledCollapse } from 'reactstrap'

export const ListItemDescription = props => {
  const { id, description } = props.repoObj

  return (
    <Row>
      <UncontrolledCollapse toggler={`#toggler${id}`} style={{ bodrer: 0 }}>
        <div style={{ padding: '10px 0' }}>{description}</div>
      </UncontrolledCollapse>
    </Row>
  )
}

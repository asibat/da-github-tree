import React from 'react'

import { Row, Col, Badge } from 'reactstrap'
import { GoStar } from 'react-icons/go'

export const ListItem = props => {
  const { name, stargazers_count } = props.repoObj

  return (
    <Row>
      <Col xs="6" style={{ textAlign: 'left' }}>
        {name}
      </Col>
      <Col xs="6" style={{ textAlign: 'right' }}>
        <Badge pill>
          <GoStar />
          {stargazers_count}
        </Badge>
      </Col>
    </Row>
  )
}

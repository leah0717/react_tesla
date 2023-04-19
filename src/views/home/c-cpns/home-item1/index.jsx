import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Item1Wrapper } from './style'

const HomeItem1 = memo((props) => {
  const { infoData } = props
  return <Item1Wrapper>HomeItem1--{infoData.info}</Item1Wrapper>
})

HomeItem1.propTypes = {
  infoData: PropTypes.object
}

export default HomeItem1

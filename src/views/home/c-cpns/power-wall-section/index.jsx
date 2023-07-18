import PropTypes from 'prop-types'
import React, { memo } from 'react'
// import classNames from 'classnames'

import Section from '@/components/section'
import PowerWall from '@/assets/img/powerwall.avif'
const PowerWallSection = memo((props) => {
  const { homeInfo = [] } = props
  const footerContent = (
    <a
      className="box-content border-[3px] border-transparent bg-black bg-opacity-60 backdrop-blur-sm text-sm rounded h-[26px] w-[210px]
      leading-[26px] font-medium text-white px-6 py-1 inline-block"
      href="#"
    >
      预约试驾
    </a>
  )

  const pictureBackground = (
    <img
      alt="Powerwall"
      className="h-full w-full object-cover object-center"
      src={PowerWall}
      id="bg-image-powerwall"
    />
  )
  return (
    <Section
      title="太阳能设备和 Powerwall"
      subtitle="全方位能源供应"
      color="black"
      footer={footerContent}
      background={pictureBackground}
    ></Section>
  )
})

PowerWallSection.propTypes = {
  homeInfo: PropTypes.array
}

export default PowerWallSection

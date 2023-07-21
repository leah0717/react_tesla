import PropTypes from 'prop-types'
import React, { memo } from 'react'
// import classNames from 'classnames'
import { SectionV1Wrapper } from './style'

import Section from '@/components/section'
const HeroSection = memo((props) => {
  const { homeInfo = [] } = props
  const footerContent = (
    <a
      className="box-content border-[3px] border-white bg-transparent backdrop-blur-sm text-sm rounded h-[26px] w-[210px]
      leading-[26px] font-medium text-white px-6 py-1 inline-block hover:bg-white hover:text-black transition delay-700 duration-500 ease-in"
      href="#"
    >
      预约试驾
    </a>
  )

  const videoBackground = (
    <video
      className="object-center object-cover h-full w-full"
      autoPlay
      muted
      loop
      src="/video.webm"
    ></video>
  )
  return (
    <SectionV1Wrapper>
      <Section
        title="体验 Tesla"
        subtitle="即刻预约试驾"
        color="white"
        footer={footerContent}
        background={videoBackground}
      ></Section>
    </SectionV1Wrapper>
  )
})

HeroSection.propTypes = {
  homeInfo: PropTypes.array
}

export default HeroSection

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

      {/* <section className="bg-black h-screen w-screen text-center relative overflow-hidden z-30">
        <div className="relative z-30 h-full flex flex-col">
          <header>
            <h2 className="text-white pt-36 text-[36px] font-medium">
              体验 Tesla
            </h2>
            <p className="text-white text-sm">即刻预约试驾</p>
          </header>
          <footer className="flex flex-col flex-grow justify-end pb-24">
            <div>
              <a
                href="#"
                className="border-[3px] border-white bg-transparent backdrop-blur-sm text-sm rounded font-medium text-white inline-block relative px-12 py-2 w-64"
              >
                预约试驾
              </a>
            </div>
          </footer>
        </div>

        <div className="absolute top-0 bottom-0 h-full z-10">
          <video
            src="/video.webm"
            autoPlay
            muted
            loop
            className="object-cover h-full"
          ></video>
        </div>
      </section> */}
    </SectionV1Wrapper>
  )
})

HeroSection.propTypes = {
  homeInfo: PropTypes.array
}

export default HeroSection

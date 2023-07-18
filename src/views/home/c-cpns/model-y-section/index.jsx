import PropTypes from 'prop-types'
import React, { memo } from 'react'

import Section from '@/components/section'
import ModelY from '@/assets/img/model-y.avif'
const ModelYSection = memo((props) => {
  const footerContent = (
    <div className="gap-x-6 flex mx-auto justify-center">
      <a
        className="box-content h-[26px] w-[210px] border-[3px] border-transparent bg-black bg-opacity-60 text-sm rounded font-medium
        text-white px-6 py-1 inline-flex justify-center items-center"
        href="#"
      >
        定制我的Model Y
      </a>
      <a
        className="box-content h-[26px] w-[210px] border-[3px] border-transparent bg-white bg-opacity-60 text-sm rounded font-medium
        px-6 py-1 transition-colors inline-flex justify-center items-center text-black"
        href="#"
      >
        预约试驾
      </a>
    </div>
  )

  const pictureBackground = (
    <img
      alt="Model Y"
      className="h-full w-full object-cover object-center"
      src={ModelY}
      id="bg-image-modely"
    />
  )
  return (
    <Section
      title="Model Y"
      subtitle="了解更多"
      color="black"
      id="model-y"
      footer={footerContent}
      background={pictureBackground}
    ></Section>
  )
})

ModelYSection.propTypes = {}

export default ModelYSection

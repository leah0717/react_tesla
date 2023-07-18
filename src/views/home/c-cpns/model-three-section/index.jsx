import PropTypes from 'prop-types'
import React, { memo } from 'react'

import Section from '@/components/section'
import Modelthree from '@/assets/img/model-3.avif'
const ModelThreeSection = memo((props) => {
  const footerContent = (
    <div className="gap-x-6 flex mx-auto justify-center">
      <a
        className="box-content h-[26px] w-[210px] border-[3px] border-transparent bg-black bg-opacity-60 text-sm rounded font-medium
        text-white px-6 py-1 inline-flex justify-center items-center"
        href="#"
      >
        定制我的Model 3
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
      alt="Model 3"
      className="h-full w-full object-cover object-center"
      src={Modelthree}
      id="bg-image-model3"
    />
  )
  return (
    <Section
      title="Model 3"
      subtitle="了解更多"
      color="black"
      id="model-3"
      footer={footerContent}
      background={pictureBackground}
    ></Section>
  )
})

ModelThreeSection.propTypes = {}

export default ModelThreeSection

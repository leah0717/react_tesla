import PropTypes from 'prop-types'
import React, { memo } from 'react'

import Section from '@/components/section'
import ModelS from '@/assets/img/model-s.avif'
const ModelSSection = memo((props) => {
  const footerContent = (
    <div className="gap-x-6 flex flex-col smtop:flex-row mx-auto justify-center items-center">
      <a
        className="box-content h-[26px] w-[210px] border-[3px] border-transparent bg-black bg-opacity-60 text-sm rounded font-medium
        text-white px-6 py-1 inline-flex justify-center items-center mb-4 smtop:mb-0"
        href="#"
      >
        定制我的Model S
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
      alt="Model S"
      className="h-full w-full object-cover object-center"
      src={ModelS}
      id="bg-image-models"
    />
  )
  return (
    <Section
      title="Model S"
      subtitle="购买现车并享受现车激励"
      color="black"
      id="model-s"
      showUnderLine={true}
      footer={footerContent}
      background={pictureBackground}
    ></Section>
  )
})

ModelSSection.propTypes = {}

export default ModelSSection

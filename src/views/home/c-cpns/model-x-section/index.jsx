import PropTypes from 'prop-types'
import React, { memo } from 'react'

import Section from '@/components/section'
import ModelX from '@/assets/img/model-x.avif'
const ModelXSection = memo((props) => {
  const footerContent = (
    <div className="gap-x-6 flex flex-col smtop:flex-row mx-auto justify-center items-center">
      <a
        className="box-content h-[26px] w-[210px] border-[3px] border-transparent bg-black bg-opacity-60 text-sm rounded font-medium
        text-white px-6 py-1 inline-flex justify-center items-center mb-4 smtop:mb-0"
        href="#"
      >
        定制我的Model X
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
      alt="Model X"
      className="h-full w-full object-cover object-center"
      src={ModelX}
      id="bg-image-modelx"
    />
  )
  return (
    <Section
      title="Model X"
      subtitle="购买现车并享受现车激励"
      color="black"
      showUnderLine={true}
      id="model-x"
      footer={footerContent}
      background={pictureBackground}
    ></Section>
  )
})

ModelXSection.propTypes = {}

export default ModelXSection

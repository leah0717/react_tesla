import PropTypes from 'prop-types'
import React, { memo } from 'react'

import Section from '@/components/section'
import Accessories from '@/assets/img/accessories.avif'
const AccessoriesSection = memo((props) => {
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
      alt="Accesorios"
      className="h-full w-full object-cover object-center"
      src={Accessories}
      id="bg-image-accessories"
    />
  )
  return (
    <Section
      title="充电产品和精品配件"
      subtitle=""
      color="black"
      id="accesorios"
      showFooterContent={true}
      footer={footerContent}
      background={pictureBackground}
    ></Section>
  )
})

AccessoriesSection.propTypes = {}

export default AccessoriesSection

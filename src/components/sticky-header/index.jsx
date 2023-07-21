import PropTypes from 'prop-types'
import React, { memo } from 'react'
const StickyHeader = memo((props) => {
  const { isExpanded } = props
  return (
    <section
      className={`fixed w-full z-40 top-0 bg-radial-gradient text-white text-xs smtop:text-sm flex items-center justify-center font-light
      transition-all duration-500 ${
        isExpanded ? 'h-[68px] smtop:h-[52px]' : 'h-0'
      }`}
    >
      <div
        className={`hidden-tablet text-center smtop:hidden transition-opacity duration-500 ${
          isExpanded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="caption">
          2023 年 12 月 31 日之前购置 Tesla 车辆
          <br />
          可享国家免征车辆购置税政策。
        </p>
      </div>
      <div
        className={`hideon-phone hidden smtop:block transition-opacity duration-500 ${
          isExpanded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        2023 年 12 月 31 日之前购置 Tesla 车辆可享国家免征车辆购置税政策。
      </div>
    </section>
  )
})
StickyHeader.propTypes = {
  isExpanded: PropTypes.bool
}
export default StickyHeader

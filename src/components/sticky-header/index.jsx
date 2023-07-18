import React, { memo } from 'react'
const StickyHeader = memo(() => {
  return (
    <section className="fixed w-full justify-between z-40 top-0 bg-radial-gradient h-[52px] p-4 text-white text-sm font-light">
      <div className="hidden-tablet text-center desktop:hidden">
        <p className="caption">
          2023 年 12 月 31 日之前购置 Tesla 车辆
          <br />
          可享国家免征车辆购置税政策。
        </p>
      </div>
      <div className="hideon-phone text-center hidden desktop:block">
        2023 年 12 月 31 日之前购置 Tesla 车辆可享国家免征车辆购置税政策。
      </div>
    </section>
  )
})

export default StickyHeader

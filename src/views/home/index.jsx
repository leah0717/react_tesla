import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { HomeWrapper } from './style'
import { accountLoginRequest } from '@/service/modules/home'

import TeslaHeader from '@/components/tesla-header'
import FooterMenu from '@/components/tesla-footer'
import HeroSection from './c-cpns/hero-section'
import ModelThree from './c-cpns/model-three-section'
import ModelY from './c-cpns/model-y-section'
import ModelS from './c-cpns/model-s-section'
import ModelX from './c-cpns/model-x-section'
import PowerWallSection from './c-cpns/power-wall-section'
import AccessoriesSection from './c-cpns/accessories-section'
import HeroDialog from './c-cpns/hero-dialog'
const Home = memo(() => {
  const dialogRef = useRef(null)
  // useEffect(function () {
  //   accountLoginRequest().then((res) => {
  //     console.log(res)
  //   })
  // }, [])
  // 从redux中获取数据
  const { homeInfo } = useSelector(
    (state) => ({
      homeInfo: state.home.homeInfo
    }),
    shallowEqual
  )
  const handleHeaderNavClick = () => {
    if (dialogRef.current) {
      dialogRef.current.showDialogHandle(true)
    }
  }

  return (
    <HomeWrapper>
      <TeslaHeader onButtonClick={handleHeaderNavClick} />
      <main className="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className="snap-center">
          <HeroSection />
        </div>
        <div className="snap-center">
          <ModelThree />
        </div>
        <div className="snap-center">
          <ModelY />
        </div>
        <div className="snap-center">
          <ModelS />
        </div>
        <div className="snap-center">
          <ModelX />
        </div>
        <div className="snap-center">
          <PowerWallSection />
        </div>
        <div className="snap-center">
          <AccessoriesSection />
        </div>
        <div className="smtop:hidden snap-center">
          <FooterMenu />
        </div>
      </main>
      <HeroDialog ref={dialogRef} />
      {/* {homeInfo.length && <HomeSectionV1 homeInfo={homeInfo} />} */}
    </HomeWrapper>
  )
})

export default Home

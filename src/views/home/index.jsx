import React, { memo, useEffect } from 'react'
import HomeItem1 from './c-cpns/home-item1'
import { HomeWrapper } from './style'
import { accountLoginRequest } from '@/service/modules/home'
import HomeItem2 from './c-cpns/home-item2'
const Home = memo(() => {
  useEffect(function () {
    accountLoginRequest().then((res) => {
      console.log(res)
    })
  }, [])
  return (
    <HomeWrapper>
      <HomeItem1 infoData={{ info: 123 }} />
      <HomeItem2 />
    </HomeWrapper>
  )
})

export default Home

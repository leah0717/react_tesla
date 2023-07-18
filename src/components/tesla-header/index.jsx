import React, { memo, useRef, useEffect } from 'react'
import { HeaderWrapper } from './style'

import StickyHeader from '../sticky-header'
import IconLogo from '@/assets/svg/icon-logo'
const TeslaHeader = memo(() => {
  const headerEl = useRef(null)

  const listItemRef = useRef([])
  const menuBackDropRef = useRef(null)
  useEffect(() => {
    // 改变头部颜色
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.9
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry)
        const { isIntersecting, target } = entry
        if (isIntersecting) {
          const color = target.getAttribute('data-header-color')
          headerEl.current.style.color = color
        }
      })
    }, observerOptions)

    const sectionElements = document.querySelectorAll('.landing-section')
    sectionElements.forEach((section) => observer.observe(section))
    // nav导航动画
    const listItemElements = document.querySelectorAll('#landing-header li')
    const menuBackDropElement = document.querySelector('#menu-backdrop')

    listItemRef.current = Array.from(listItemElements)
    menuBackDropRef.current = menuBackDropElement

    listItemRef.current.forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter)
      item.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      // 清理观察器
      sectionElements.forEach((section) => observer.unobserve(section))
      // 清理监听器
      listItemRef.current.forEach((item) => {
        item.removeEventListener('mouseenter', handleMouseEnter)
        item.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])
  const handleMouseEnter = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect()
    const menuBackDrop = menuBackDropRef.current
    menuBackDrop.style.setProperty('--left', `${left}px`)
    menuBackDrop.style.setProperty('--top', `${top - 52}px`)
    // menuBackDrop.style.setProperty('--top', `${top}px`)
    menuBackDrop.style.setProperty('--width', `${width}px`)
    menuBackDrop.style.setProperty('--height', `${height}px`)

    menuBackDrop.style.opacity = '1'
    menuBackDrop.style.visibility = 'visible'
  }

  const handleMouseLeave = () => {
    const menuBackDrop = menuBackDropRef.current

    menuBackDrop.style.opacity = '0'
    menuBackDrop.style.visibility = 'hidden'
  }
  return (
    <HeaderWrapper>
      <StickyHeader />
      <header
        id="landing-header"
        ref={headerEl}
        className="px-8 py-3 flex items-center fixed w-full justify-between z-40 text-white h-14 top-[52px]"
      >
        <div className="flex flex-grow basis-0 [&>a]:inline-block [&>a]:px-4">
          <a href="/">
            <IconLogo />
          </a>
        </div>
        <nav className="hidden desktop:block">
          <ul
            className="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current
                      [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"
          >
            <li>
              <a href="#model-s">Model S</a>
            </li>
            <li>
              <a href="#model-3">Model 3</a>
            </li>
            <li>
              <a href="#model-x">Model X</a>
            </li>
            <li>
              <a href="#model-y">Model Y</a>
            </li>
            <li>
              <a href="#powerwall">Cybertruck</a>
            </li>
            <li>
              <a href="#accesorios">Powerwall</a>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-grow justify-end basis-0">
          <ul
            className="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current
                      [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"
          >
            <li className="hidden desktop:block">
              <a href="#">在线商店</a>
            </li>
            <li className="hidden desktop:block">
              <a href="#">账户</a>
            </li>
            <li>
              <a href="#">导航栏</a>
            </li>
          </ul>
        </nav>
        <div
          id="menu-backdrop"
          className={`
            absolute bg-black/5 backdrop-blur-lg rounded
            translate-x-[var(--left)] translate-y-[var(--top)]
            left-0 top-0
            w-[var(--width)] h-[var(--height)]
            transition-all duration-500
            ease-in-out opacity-0 -z-10
          `}
        ></div>
      </header>
    </HeaderWrapper>
  )
})

export default TeslaHeader

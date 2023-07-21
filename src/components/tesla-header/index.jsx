import React, { memo, useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { HeaderWrapper } from './style'

import StickyHeader from '../sticky-header'
import IconLogo from '@/assets/svg/icon-logo'
const TeslaHeader = memo(({ onButtonClick }) => {
  const headerEl = useRef(null)

  const listItemRef = useRef([])
  const menuBackDropRef = useRef(null)

  const [isExpanded, setIsExpanded] = useState(false)
  useEffect(() => {
    // 改变头部字体颜色
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.9
    }
    const observer = new IntersectionObserver((entries) => {
      if (Array.isArray(entries)) {
        const entry = entries.find((entry) => entry.isIntersecting)
        if (entry) {
          const color = entry.target.getAttribute('data-header-color')
          headerEl.current.style.color = color
        }
      } else {
        console.error('Invalid entries:', entries)
      }
    }, observerOptions)

    const sectionElements = document.querySelectorAll('.landing-section')
    if (sectionElements && sectionElements.length > 0) {
      // console.log(`sectionElements====`, sectionElements)
      Array.from(sectionElements).forEach((section) =>
        observer.observe(section)
      )
    } else {
      console.error('No landing sections found')
    }

    // nav透明度
    // 延迟一段时间后将透明度设置为 1
    const timeoutId = setTimeout(() => {
      const navEl = document.querySelectorAll('header nav')
      if (navEl && Array.from(navEl).length > 0) {
        // console.log(`navEl====`, Array.from(navEl))
        Array.from(navEl).forEach((item) => {
          item.style.opacity = '1'
        })
      }
    }, 800)
    // nav导航动画
    const listItemElements = document.querySelectorAll('#landing-header li')
    const menuBackDropElement = document.querySelector('#menu-backdrop')

    listItemRef.current = Array.from(listItemElements)
    menuBackDropRef.current = menuBackDropElement

    listItemRef.current.forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter)
      item.addEventListener('mouseleave', handleMouseLeave)
    })
    // 推出效果
    const timeoutId2 = setTimeout(() => {
      setIsExpanded(true)
    }, 1500) // 设置适当的延时值
    return () => {
      // 清理观察器
      sectionElements.forEach((section) => observer.unobserve(section))
      // 清理监听器
      listItemRef.current.forEach((item) => {
        item.removeEventListener('mouseenter', handleMouseEnter)
        item.removeEventListener('mouseleave', handleMouseLeave)
      })
      // 清理定时器
      clearTimeout(timeoutId)
      clearTimeout(timeoutId2)
    }
  }, [])
  const handleNavClick = (event) => {
    event.preventDefault()
    onButtonClick('信息传递给父组件')
  }
  const handleMouseEnter = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect()
    const menuBackDrop = menuBackDropRef.current
    menuBackDrop.style.setProperty('--left', `${left}px`)
    menuBackDrop.style.setProperty(
      '--top',
      isExpanded ? '0px' : `${top - 52}px`
    )
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

  const menuItems = [
    { href: '#model-s', text: 'Model S' },
    { href: '#model-3', text: 'Model 3' },
    { href: '#model-x', text: 'Model X' },
    { href: '#model-y', text: 'Model Y' },
    { href: '#powerwall', text: 'Cybertruck' },
    { href: '#accesorios', text: 'Powerwall' }
  ]
  return (
    <HeaderWrapper>
      <StickyHeader isExpanded={isExpanded} />
      <header
        id="landing-header"
        ref={headerEl}
        className={classnames(
          'px-2 smtop:px-8 py-3 flex items-center fixed w-full justify-between z-40 text-white h-14 top-0 transition-all duration-500',
          { 'top-[68px] smtop:top-[52px]': isExpanded }
        )}
      >
        <div className="flex flex-grow basis-0 [&>a]:inline-block [&>a]:px-4">
          <a href="/">
            <IconLogo />
          </a>
        </div>
        <nav className="hidden desktop:block opacity-0 transition-opacity duration-500">
          <ul
            className="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current
                      [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="flex flex-grow justify-end basis-0 opacity-0 transition-opacity duration-500">
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
              <a href="#" onClick={handleNavClick}>
                导航栏
              </a>
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
TeslaHeader.propTypes = {
  onButtonClick: PropTypes.func
}
export default TeslaHeader

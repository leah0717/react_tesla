import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'

import FooterMenu from '../tesla-footer'
const index = memo((props) => {
  const {
    color = '',
    title = '',
    subtitle = '',
    id = '',
    showFooterContent = false,
    showUnderLine = false,
    footer = null,
    background = null
  } = props
  const textColor = `text-${color}`

  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const footerRef = useRef(null)

  const [isFooterVisible, setFooterVisible] = useState(false)
  useEffect(() => {
    const showElement = (elementRef, animationClass, duration) => {
      elementRef.current.classList.remove('hidden')
      elementRef.current.classList.add(animationClass)
      return new Promise((resolve) => setTimeout(resolve, duration))
    }

    const delay = 2400
    const animationDuration = 800

    const showTitle = () =>
      showElement(titleRef, 'animate-push-out', animationDuration)
    const showSubtitle = () =>
      showElement(subtitleRef, 'animate-push-out', animationDuration)
    const showFooter = () => {
      setFooterVisible(true)
      return new Promise((resolve) => setTimeout(resolve, animationDuration))
    }

    const timer = setTimeout(async () => {
      await Promise.all([showTitle(), showFooter()])
      await showSubtitle()
    }, delay)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className="landing-section bg-black h-screen w-screen text-center overflow-hidden relative"
      data-header-color={color}
      id={id}
    >
      <div className="z-30 relative h-full flex flex-col">
        <header>
          <h2
            ref={titleRef}
            className={`${textColor} pt-44 text-[39px] font-medium hidden`}
          >
            {title}
          </h2>
          <a
            ref={subtitleRef}
            href="#"
            className={`${textColor} text-sm inline-block ${
              showUnderLine
                ? 'shadow-underLine pb-0.5 transition-all duration-300 hover:shadow-hover'
                : ''
            } hidden`}
          >
            {subtitle}
          </a>
        </header>

        <footer className="flex flex-col flex-grow justify-end pb-20 h-full">
          {footer && (
            <div
              ref={footerRef}
              className={`footer ${
                isFooterVisible ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-1000`}
            >
              {footer}
            </div>
          )}
          <div className="hidden smtop:block">
            {showFooterContent && <FooterMenu />}
          </div>
        </footer>
      </div>
      <div className="absolute top-0 bottom-0 h-full w-full z-10">
        {background && (
          <div className="background h-full w-full">{background}</div>
        )}
      </div>
    </section>
  )
})

index.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  id: PropTypes.string,
  showFooterContent: PropTypes.bool,
  showUnderLine: PropTypes.bool,
  footer: PropTypes.element,
  background: PropTypes.element
}

export default index

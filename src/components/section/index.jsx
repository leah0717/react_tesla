import PropTypes from 'prop-types'
import React, { memo } from 'react'

import FooterMenu from '../tesla-footer'
const index = memo((props) => {
  const { color, title, subtitle, id, showFooterContent, footer, background } =
    props
  const textColor = `text-${color}`
  return (
    <section
      className="landing-section bg-black h-screen w-screen text-center overflow-hidden relative"
      data-header-color={color}
      id={id}
    >
      <div className="z-30 relative h-full flex flex-col">
        <header>
          <h2 className={`${textColor} pt-36 text-[36px] font-medium`}>
            {title}
          </h2>
          <p className={`${textColor} text-sm`}>{subtitle}</p>
        </header>

        <footer className="flex flex-col flex-grow justify-end pb-24 h-full">
          {footer && <div className="footer">{footer}</div>}
          {showFooterContent && <FooterMenu />}
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
  footer: PropTypes.element,
  background: PropTypes.element
}

export default index

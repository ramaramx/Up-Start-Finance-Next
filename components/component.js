import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className="component-container">
        <img
          alt={props.hero_image_alt}
          src={props.hero_image_src}
          loading="lazy"
          className="component-hero-image"
        />
        <img
          alt={props.hero_image_alt1}
          src={props.hero_image_src1}
          loading="lazy"
          className="component-hero-image1"
        />
      </div>
      <style jsx>
        {`
          .component-container {
            width: 100%;
            height: 393px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .component-hero-image {
            flex: 1;
            width: 603px;
            height: 406px;
            max-width: none;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 50px;
            margin-bottom: 3px;
          }
          .component-hero-image1 {
            flex: 1;
            width: 594px;
            max-width: 100%;
            align-self: flex-end;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .component-hero-image {
              margin-bottom: 0px;
            }
            .component-hero-image1 {
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .component-hero-image {
              margin-right: 0px;
            }
            .component-hero-image1 {
              margin-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .component-container {
              width: 478px;
            }
            .component-hero-image {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  hero_image_src:
    'https://images.unsplash.com/photo-1572953109213-3be62398eb95?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fG11c2V1bXxlbnwwfHx8fDE2NTg1NzI1NDE&ixlib=rb-1.2.1&h=500',
  hero_image_src1:
    'https://images.unsplash.com/photo-1645588799116-4f416bf28902?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fG1ldGF8ZW58MHx8fHwxNjU4NTY3OTUy&ixlib=rb-1.2.1&h=900',
  hero_image_alt: 'image',
  hero_image_alt1: 'image',
}

AppComponent.propTypes = {
  hero_image_src: PropTypes.string,
  hero_image_src1: PropTypes.string,
  hero_image_alt: PropTypes.string,
  hero_image_alt1: PropTypes.string,
}

export default AppComponent

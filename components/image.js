import React from 'react'

import PropTypes from 'prop-types'

const Image = (props) => {
  return (
    <>
      <div className="image-image">
        <div className="image-container">
          <img
            alt={props.hero_image_alt}
            src={props.hero_image_src}
            loading="lazy"
            className="image-hero-image"
          />
          <img
            alt={props.hero_image_alt1}
            src={props.hero_image_src1}
            loading="lazy"
            className="image-hero-image1"
          />
        </div>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="image-image1"
        />
      </div>
      <style jsx>
        {`
          .image-image {
            width: 831px;
            height: 477px;
            position: relative;
            align-self: center;
          }
          .image-container {
            flex: 0 0 auto;
            width: 802px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .image-hero-image {
            flex: 1;
            width: 300px;
            height: 462px;
            max-width: 100%;
            object-fit: cover;
            padding-top: 0px;
            border-radius: 50px;
            padding-right: 15px;
            padding-bottom: 3px;
          }
          .image-hero-image1 {
            flex: 1;
            width: 300px;
            height: 462px;
            max-width: 100%;
            object-fit: cover;
            margin-left: 15px;
            border-radius: 50px;
            margin-bottom: 3px;
          }
          .image-image1 {
            right: 162px;
            bottom: -72px;
            position: absolute;
            object-fit: contain;
          }
          @media (max-width: 991px) {
            .image-image {
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .image-hero-image {
              margin-bottom: 0px;
            }
            .image-hero-image1 {
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .image-hero-image {
              margin-right: 0px;
            }
            .image-hero-image1 {
              margin-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .image-image {
              height: 400px;
              margin-bottom: 0px;
              padding-bottom: 0px;
            }
            .image-hero-image1 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Image.defaultProps = {
  hero_image_alt: 'image',
  image_src: '/playground_assets/group%2018-900w.png',
  hero_image_src:
    'https://images.unsplash.com/photo-1645588799116-4f416bf28902?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fG1ldGF8ZW58MHx8fHwxNjU4NTY3OTUy&ixlib=rb-1.2.1&h=500',
  image_alt: 'image',
  hero_image_alt1: 'image',
  hero_image_src1:
    'https://images.unsplash.com/photo-1572953109213-3be62398eb95?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fG11c2V1bXxlbnwwfHx8fDE2NTg1NzI1NDE&ixlib=rb-1.2.1&h=500',
}

Image.propTypes = {
  hero_image_alt: PropTypes.string,
  image_src: PropTypes.string,
  hero_image_src: PropTypes.string,
  image_alt: PropTypes.string,
  hero_image_alt1: PropTypes.string,
  hero_image_src1: PropTypes.string,
}

export default Image

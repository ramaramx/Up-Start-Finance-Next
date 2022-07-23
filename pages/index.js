import React from 'react'
import Head from 'next/head'

import Image from '../components/image'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Up Start Finance</title>
          <meta property="og:title" content="Up Start Finance" />
        </Head>
        <div className="navbar-container">
          <div className="max-width">
            <div className="home-logo">
              <img
                alt="image"
                src="/playground_assets/pam%20jaya%20metaverse_page-0001-200h.jpg"
                loading="lazy"
                className="home-image"
              />
            </div>
            <div className="home-links">
              <span className="home-text navbar-Link">About</span>
              <span className="home-text01 navbar-Link">Features</span>
              <span className="home-text02 navbar-Link">Blog</span>
              <span className="home-text03 navbar-Link">Pricing</span>
              <button className="home-button button button-primary">
                Explore Now
              </button>
            </div>
            <div className="home-burger-menu navbar-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="hero-container section-container">
          <div className="home-max-width1 max-width">
            <div className="home-content">
              <h1 className="home-title">
                <span className="home-text04">New Experience</span>
                <br></br>
                <span className="home-text06">Virtual Reality</span>
                <br></br>
                <span className="home-text08">WATERVERSE</span>
              </h1>
              <div className="home-container1">
                <button className="home-button1 button button-gradient">
                  Explore Now
                </button>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <span className="home-text09">
                    Learn More
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </a>
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </div>
            </div>
            <Image></Image>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width2 max-width">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fG9jdWx1c3xlbnwwfHx8fDE2NTg1NzAyMjg&amp;ixlib=rb-1.2.1&amp;w=1200"
              loading="eager"
              className="home-hero-image"
            />
            <div className="home-content1">
              <span className="home-text10 before-Heading">
                what is waterverse?
              </span>
              <h1 className="home-text11">
                <span className="home-text12">
                  Virtual reality of PAM JAYA
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text13">
                  Different
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text14">than other museum.</span>
                <span className="home-text15"></span>
              </h1>
              <div className="home-container2">
                <button className="button-secondary button bg-transparent">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section1 section-container">
          <div className="home-max-width3 max-width">
            <div className="home-content2">
              <h1 className="home-text16">
                <span className="home-text17">
                  Immersive experience
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>pulls a viewer into another real or imagined world</span>
                <br></br>
                <span></span>
              </h1>
              <div className="home-container3">
                <button className="button-secondary button bg-transparent home-button3">
                  See how
                </button>
              </div>
            </div>
            <div className="home-image1">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDUwfHx2aXJ0dWFsfGVufDB8fHx8MTY1ODU3MDI4OA&amp;ixlib=rb-1.2.1&amp;w=1200"
                loading="eager"
                className="home-hero-image1"
              />
            </div>
          </div>
        </div>
        <div className="home-section2 section-container">
          <div className="home-max-width4 max-width">
            <div className="home-image2">
              <img
                alt="image"
                src="/playground_assets/jc-gellidon-fnc3yctccoi-unsplash%2014%20%5B1%5D-1200w.png"
                className="home-hero-image2"
              />
            </div>
            <div className="home-content3">
              <h1 className="home-text20">Bagaimana Cara menggunakannya?</h1>
              <div className="home-step">
                <div className="home-number">
                  <span className="home-text21">1</span>
                </div>
                <div className="home-container4">
                  <span className="home-title1">
                    Buka Web Menggunakan platfom yang kamu punya
                  </span>
                  <span className="home-text22">
                    Tersedia di 3 platfom mobile, desktop &amp; oculus
                  </span>
                </div>
              </div>
              <div className="home-step1">
                <div className="home-number1">
                  <span className="home-text23">2</span>
                </div>
                <div className="home-container5">
                  <span className="home-title2">
                    Bagimana cara menjalankannya?
                  </span>
                  <span className="home-text24">
                    Buka web waterverse.pamjaya.com lalu klik Explore Museum
                    untuk merasakan dunia virtual
                  </span>
                </div>
              </div>
              <div className="home-step2">
                <div className="home-number2">
                  <span className="home-text25">3</span>
                </div>
                <div className="home-container6">
                  <span className="home-title3">Ada apa saja didalamnya?</span>
                  <span className="home-text26">
                    Banyak hal yang didalamnya, seperti sejarah dari PAM JAYA
                    selama100th dan masih banyak lainnya!!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="home-footer">
          <footer className="home-footer1">
            <img
              alt="logo"
              src="/playground_assets/pam%20jaya%20metaverse_page-0001-200h.jpg"
              className="home-image3"
            />
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
            <span className="home-text27">
              © 2022 PAM JAYA, All Rights Reserved.
            </span>
          </footer>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-logo {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image {
            width: var(--dl-size-size-medium);
            object-fit: cover;
            margin-right: 14px;
          }
          .home-links {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-text {
            color: var(--dl-color-scheme-green80);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-text01 {
            color: var(--dl-color-scheme-green80);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-text02 {
            color: var(--dl-color-scheme-green80);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-text03 {
            color: var(--dl-color-scheme-green80);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-button {
            font-family: Poppins;
          }
          .home-burger-menu {
            fill: #105749;
            width: 24px;
            height: 24px;
          }
          .home-max-width1 {
            align-items: center;
          }
          .home-content {
            flex: 0 0 auto;
            width: 45%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-title {
            color: var(--dl-color-scheme-white);
            width: 493px;
            height: 275px;
            font-size: 62px;
            font-style: normal;
            font-family: Source Sans Pro;
            font-weight: 700;
            line-height: 1.2;
          }
          .home-text04 {
            text-align: right;
          }
          .home-text06 {
            text-align: right;
          }
          .home-text08 {
            color: var(--dl-color-scheme-orange100);
            text-align: right;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-button1 {
            font-family: Poppins;
            border-radius: 15px;
          }
          .home-link {
            font-size: 32px;
            align-self: center;
          }
          .home-text09 {
            color: #ffffff;
            font-size: 21px;
            align-self: center;
            font-family: Poppins;
            padding-left: 25px;
          }
          .home-icon02 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            align-self: center;
          }
          .home-max-width2 {
            align-items: stretch;
          }
          .home-hero-image {
            width: 601px;
            height: 900px;
            object-fit: contain;
            margin-left: -150px;
            border-radius: 48px;
          }
          .home-content1 {
            width: 50%;
            display: flex;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text10 {
            color: var(--dl-color-scheme-green80);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text11 {
            font-size: 42px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text12 {
            font-family: Urbanist;
          }
          .home-text13 {
            color: var(--dl-color-scheme-orange100);
            font-family: Urbanist;
          }
          .home-text14 {
            font-family: Urbanist;
          }
          .home-text15 {
            font-family: Urbanist;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-section1 {
            background-color: rgba(255, 199, 139, 0.14);
          }
          .home-max-width3 {
            align-items: stretch;
          }
          .home-content2 {
            width: 50%;
            display: flex;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text16 {
            font-size: 42px;
            font-style: normal;
            text-align: right;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text17 {
            color: var(--dl-color-scheme-orange100);
            font-family: Urbanist;
          }
          .home-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-end;
          }
          .home-hero-image1 {
            width: 745px;
            transform: scaleX(-1);
            object-fit: contain;
            margin-right: -175px;
            border-radius: 48px;
          }
          .home-section2 {
            background-color: var(--dl-color-scheme-green100);
          }
          .home-max-width4 {
            align-items: stretch;
          }
          .home-image2 {
            width: 50%;
          }
          .home-hero-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 48px;
          }
          .home-content3 {
            width: 40%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text20 {
            color: var(--dl-color-scheme-white);
            font-size: 42px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.35;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-step {
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-number {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-text21 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .home-container4 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title1 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text22 {
            color: var(--dl-color-scheme-white);
            line-height: 1.5;
          }
          .home-step1 {
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-number1 {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-text23 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .home-container5 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title2 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text24 {
            color: var(--dl-color-scheme-white);
            line-height: 1.5;
          }
          .home-step2 {
            display: flex;
            flex-direction: row;
          }
          .home-number2 {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-text25 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .home-container6 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title3 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text26 {
            color: var(--dl-color-scheme-white);
            line-height: 1.5;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: 100%;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-footer1 {
            width: var(--dl-size-size-maxwidth);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: stretch;
            align-items: center;
            padding-right: 5px;
            flex-direction: column;
            justify-content: center;
          }
          .home-image3 {
            width: 98px;
            height: 72px;
            margin-top: 1.5rem;
            object-fit: cover;
          }
          .home-icon-group {
            display: flex;
            margin-top: 1rem;
            align-items: center;
            margin-bottom: 1rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-text27 {
            margin-bottom: 1.5rem;
          }
          @media (max-width: 991px) {
            .home-content {
              width: 50%;
              margin-right: var(--dl-space-space-unit);
            }
            .home-max-width2 {
              flex-direction: column;
            }
            .home-hero-image {
              width: 100%;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home-content1 {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-max-width3 {
              flex-direction: column;
            }
            .home-content2 {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-image1 {
              padding-bottom: 0px;
            }
            .home-hero-image1 {
              width: 100%;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home-max-width4 {
              flex-direction: column;
            }
            .home-image2 {
              width: 100%;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-hero-image2 {
              width: 100%;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home-content3 {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-footer {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .home-links {
              display: none;
            }
            .home-icon {
              fill: var(--dl-color-scheme-green100);
            }
            .home-max-width1 {
              flex-direction: column-reverse;
            }
            .home-content {
              width: 100%;
              margin-right: 0px;
            }
            .home-content1 {
              width: 100%;
              margin-right: 0px;
            }
            .home-content2 {
              width: 100%;
              margin-right: 0px;
            }
            .home-content3 {
              width: 100%;
              margin-right: 0px;
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text27 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-title {
              align-self: flex-start;
            }
            .home-button1 {
              border-radius: 15px;
            }
            .home-hero-image {
              width: 100%;
              height: 500px;
              border-radius: 0px;
            }
            .home-container3 {
              align-self: flex-end;
              justify-content: flex-end;
            }
            .home-button3 {
              width: 120px;
              text-align: center;
              margin-right: 0px;
            }
            .home-footer {
              height: 195px;
              padding: var(--dl-space-space-unit);
              padding-top: 5px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-footer1 {
              width: 478px;
              padding: var(--dl-space-space-unit);
              align-self: center;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-image3 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text27 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

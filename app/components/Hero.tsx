import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div>
    <header>
     <div className="house"></div>
      <div className="div-one">
        <h1 className="head-one">Governor Sindh</h1>
        <h1 className="head-two">Kamran Khan Tessori</h1>
        <h2 className="cloud-applied">
          Certified Cloud <br /> Applied Generative AI <br /> Engineer (
          GenEng )
        </h2>
        <p className="earn-up">Earn up to $5,000 / month</p>
        <p className="now-admission">
          Now admissions are open in <br /> Hyderabad
        </p>

        <div className="head-last">
        <a href="https://www.governorsindh.com/apply"><button className="web-btn" type="button">
            Apply Now 
          </button></a>
          <div className="head-lastest">
            <h1 className="five-six-two">562,143</h1>
            <p>Accepted Applications</p>
          </div>
        </div>
      </div>

      <div className="div-two">
        <div className="cover w-full h-full">
          <Image
          className="cover-img"
            src="/images/cover.png"
            alt="logo"
            width={1700}
            height={1800}
          />
        </div>
      </div>
    </header>
    <section>
          <h1 className="section-head-one">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
          <p className="section-pera-one text-justify">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members...</p>

          <div className="infor-img flex m-10 gap-8 justify-center">

          <Image
            src="/images/infor-img1.png"
            alt="logo"
            width={300}
            height={100}
            className="inf-img"
          />
          <Image
            src="/images/infor-img2.png"
            alt="logo"
            width={300}
            height={100}
            className="inf-img"
          />
          <Image
            src="/images/infor-img3.png"
            alt="logo"
            width={300}
            height={100}
            className="inf-img"
          />

          </div>
          <div className="infor-img2 flex m-10 gap-8 justify-center">

          <Image
            src="/images/infor-img4.png"
            alt="logo"
            width={465}
            height={400}
            className="inf-img"
          />
          <Image
            src="/images/infor-img5.png"
            alt="logo"
            width={465}
            height={400}
            className="inf-img"
          />

          </div>

    </section>
  </div>
  )
}



import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <header>
        <div className="house"></div>

        <div className="div-one">
          <h1 className="head-one">Governor Sindh</h1>
          <h1 className="head-two">Kamran Khan Tessori</h1>
          <h2 className="cloud-applied">
            Certified Cloud <br /> Applied Generative AI <br /> Engineer (GenEng)
          </h2>
          <p className="earn-up">Earn up to $5,000 / month</p>
          <p className="now-admission">
            Now admissions are open in <br /> Hyderabad
          </p>

          <div className="head-last">
            <a href="https://www.governorsindh.com/apply" target="_blank" rel="noopener noreferrer">
              <button className="web-btn" type="button">
                Apply Now
              </button>
            </a>
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
              alt="Cover image showcasing program details"
              width={1700}
              height={1800}
            />
          </div>
        </div>
      </header>

      <section>
        <h1 className="section-head-one">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>
        <p className="section-pera-one text-justify">
          The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks...
        </p>

        <div className="infor-img flex m-10 gap-8 text-center justify-center">
          <Image
            src="/images/infor-img1.png"
            alt="Information about the first part of the program"
            width={300}
            height={100}
            className="inf-img"
          />
          <Image
            src="/images/infor-img2.png"
            alt="Information about the second part of the program"
            width={300}
            height={100}
            className="inf-img"
          />
          <Image
            src="/images/infor-img3.png"
            alt="Information about the third part of the program"
            width={300}
            height={100}
            className="inf-img"
          />
        </div>

        <div className="infor-img flex m-10 gap-10 text-center justify-center">
          <Image
            src="/images/infor-img4.png"
            alt="Detailed information section"
            width={465}
            height={400}
            className="inf-img"
          />
          <Image
            src="/images/infor-img5.png"
            alt="Another section with detailed information"
            width={465}
            height={400}
            className="inf-img"
          />
        </div>
      </section>
    </div>
  );
}

'use client'

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionFirst = () => {

  const settings = {
    speed: 3000,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const benefitItems = [
    { icon: 'benefit_01', subtitle: '학원운영', title: '핵심 기능 위주' },
    { icon: 'benefit_02', subtitle: '자동화 서비스', title: '청구·채점' },
    { icon: 'benefit_03', subtitle: '학부모를 위한', title: '편리성' },
  ]

  return (
    <section className="section_first">
      <Slider {...settings} className={"section_first_slider"}>
        <article className="first_banner">
          <div className="backdrop_opacity">

            <img src="/images/img_jb_main_01.png" alt="JB학원연합"/>

            <h4>전북학원연합회가 운영하는 전북특별자치도 소재의 학원을 위한 학원 운영 통합솔루션</h4>

            <div className="benefit_group">
              {benefitItems.map((item, index) => (
                <div className="benefit_bundle" key={index}>
                  <i className={`icon ${item.icon}`}/>
                  <p>{item.subtitle}</p>
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>

          </div>
        </article>

        <article className="second_banner" />
      </Slider>
    </section>
  );
};

export default SectionFirst;
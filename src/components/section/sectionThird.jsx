'use client'

import React from 'react';
import Slider from "react-slick";

const SectionThird = () => {

  const thirdSectionItems = [
    {path: 'digital_exchange',title: 'DIGITAL EXCHANGE', content: '<div><span class="emp bold">아날로그적 학원업무에 대한 디지털 전환</span><br/>학원의 안과 밖에서 그 동안 했던 모든 관리업무를<br/>아주 쉽게 할 수 있습니다.</div>'},
    {path: 'for_teacher', title: 'FOR TEACHER', content: '<div>자체적인 알림장과 모바일 공지로 걱정되었던<br/>선생님의 <span class="emp bold">개인정보의 노출을 원천 차단</span>합니다.</div>'},
    {path: 'for_parents', title: 'FOR PARENTS', content: '<div>학생이 수강 중인 학원에 대한 결제일, 수강료와 월별 학원비 지출 규모 등을<br/><span class="emp bold">한눈에 확인</span>하고, 아이의 공부 내용도 학원으로부터 <span class="emp bold">편하게 제공</span>받습니다.</div>'},
  ]

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className="section_third">
      <Slider {...settings} className={"section_second_slider"}>
        {thirdSectionItems.map((item, index) => (
          <article key={index}>
            <div className="layout">
              <img src={`/images/img_${item.path}.jpg`} alt={`${item.title}`}/>
              <div className="title">{item.title}</div>
              <div className="content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
};

export default SectionThird;
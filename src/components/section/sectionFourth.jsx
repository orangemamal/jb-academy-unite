'use client'

import React from 'react';
import Slider from "react-slick";

const SectionFourth = () => {

  const fourthSectionItems = [
    {no: '01', title: '가성비 좋은 서비스', list: ['학원업무의 A~Z까지<br/>One Stop 서비스', '원생 수 제한 없이 사용 가능']},
    {no: '02', title: '멀티 디바이스', list: ['PC & 모바일에서 모든 기능을<br/>동일하게 사용 가능', '데이터 입력 및 관리업무는<br/>PC에서<br/>학부모님과의 소통과 알림은<br/>Mobile에서']},
    {no: '03', title: '유연한 소통', list: ['개인정보 노출 없이도 출결,<br/>상담일지, 알림장, 수납청구 등 <br/>클릭 해결']},
    {no: '04', title: '실시간 출결 체크', list: ['지문 입력 및 출결 카드<br/>오류로부터 해방', '학생이 직접 4자리 출결번호<br/>입력을 통한 출결 진위성 보장']},
    {no: '05', title: '편리한 수납·청구 관리', list: ['월별 지정된 날짜 자동 청구', '학원 특성에 맞는 수강반별 청구', '월별 수납통계, 미납학생 관리,<br/>영수증 출력']},
    {no: '06', title: '간편한 모바일 결제', list: ['학부모 언제 어디서나 편리한 결제', '모바일 결제로 교육비 미납율 감소', '아이들의 대리결제 Stop']},
  ]

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "120px",
    slidesToShow: 3,
    pauseOnHover: false,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
  };

  return (
    <section className="section_fourth">
      <Slider {...settings} className={"section_third_slider"}>
        {fourthSectionItems.map((item, index) => (
          <article key={index}>
            <div className="layout">
              <img src={`/images/img_solution_function_${item.no}.svg`} alt={`img_solution_function_${item.no}`}/>
              <div className="content">
                <h3>{item.title}</h3>
                <ul>
                  {item.list.map((listItem, listIndex) => (
                    <li key={listIndex} dangerouslySetInnerHTML={{ __html: listItem }}></li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
};

export default SectionFourth;
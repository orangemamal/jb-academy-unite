import React from 'react';

const SectionSecond = () => {

  const oneVoiceItems = [
    { path: '01', alternative: '이', content: '제 우리가 필요한 기능 위주의 솔루션을 만나볼수 있습니다.'},
    { path: '02', alternative: '구', content: '체적으로는 알림장과 상담일지, 수납관리 등 매일하는'},
    { path: '03', alternative: '동', content: '일한 업무에 대해 자동화와 온라인화로 인해 잔무가 줄어들어 <br/>더욱 아이들 교육에 집중할 수 있다고 합니다.'},
    { path: '04', alternative: '성', content: '공적인 학원 운영을 위해 원장님! JB학원연합과 함께 하세요!'},
  ]

  return (
    <section className="section_second">
      <article>
        <div className="backdrop_opacity">
          <img src="/images/img_with_one_voice.svg" alt="이구동성" />

          <div data-type="divider" />

          <h4>이·구·동·성</h4>

          <p>JB학원연합을 쓰시는 원장님과 선생님들은 드디어</p>

          {oneVoiceItems.map((item, index) => (
            <div className="spelling_bundle" key={index}>
              <img src={`/images/img_spelling_${item.path}.svg`} alt={`${item.alternative}`} />
              <span dangerouslySetInnerHTML={{ __html: item.content }}></span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default SectionSecond;
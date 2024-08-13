'use client'

import React, {useState} from 'react';
import KakaoMapApi from '@/components/atomic/KakaoMapApi';
import BasicTabComp from '@/components/atomic/BasicTabComp';

const SectionFifth = () => {

  const [tabItems, setTabItems] = useState([
    {item: '전라북도학원연합회', value: true, address: '전라북도 전주시 완산구 중화산동 2가 615-6번지, 2층 전라북도 학원연합회'},
    {item: '스마트러닝코리아', value: false, address: '서울시 강남구 논현로 26길 14, JUN CENTER 5층'},
  ]);

  const [activeLocation, setActiveLocation] = useState(true);
  const [selectedName, setSelectedName] = useState(tabItems[0].item);
  const [selectedAddress, setSelectedAddress] = useState(tabItems[0].address);

  const handleTabClick = (index) => {
    const updatedTabItems = tabItems.map((item, i) =>
      {
        if (i === index) {
          setActiveLocation(false)
          return { ...item, value: true }
        } else {
          setActiveLocation(true)
          return { ...item, value: false }
        }
      }
    );
    setTabItems(updatedTabItems)
    setSelectedName(tabItems[index].item);
    setSelectedAddress(tabItems[index].address);
    setActiveLocation(index === 0);
  };

  return (
    <section className="section_fifth">
      <article className="tab_wrap">
        <BasicTabComp
          tabItems={tabItems}
          onTabClick={handleTabClick}
        />

        {activeLocation ? (
          <article className="map_info">
            <h3>찾아오시는 길</h3>
            <div data-type="divider"/>
            <h6>전라북도 전주시 완산구 중화산동 2가 615-6번지, 2층 전라북도 학원연합회</h6>
            <ul>
              <li>TEL. 063-236-6661~2</li>
              <li>Fax. 063-236-6664</li>
              <li>E-Mail : ajbor@hanmail.net</li>
            </ul>
          </article>
        ) : (
          <article className="map_info">
            <h3>찾아오시는 길</h3>
            <div data-type="divider"/>
            <h6>서울시 강남구 논현로 26길 14, JUN CENTER 5층</h6>
            <ul>
              <li>TEL. 02-572-0818</li>
              <li>E-Mail : help@slkedu.com</li>
            </ul>
          </article>
        )
        }
      </article>

      <KakaoMapApi selectedName={selectedName} selectedAddress={selectedAddress} />

    </section>
  );
};

export default SectionFifth;
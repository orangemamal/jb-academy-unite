"use client"

import React, {useEffect, useState} from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import {useDispatch, useSelector} from "react-redux";
import {setPageValue} from "@/lib/userCommon";

const Header = () => {
  const dispatch = useDispatch();

  let [addClassMenu, setAddClassMenu] = useState(false);
  const nowPage = useSelector(state => state.userCommon.nowPage);

  const [navListItems, setNavListItems] = useState([
    { id: 1, title: 'JB학원연합', status: false },
    { id: 2, title: '선택의 이유', status: false },
    { id: 3, title: '세가지 강점', status: false },
    { id: 4, title: '솔루션의 기능', status: false },
    { id: 5, title: '오시는 길', status: false },
  ])

  const activeMenu = () => {
    setAddClassMenu(prevState => !prevState);
  }

  useEffect(() => {
    setNavListItems((prevNavListItems) =>
      prevNavListItems.map((item, index) => {
        return {
          ...item,
          status: nowPage === index,  // 현재 페이지에 해당하는 항목만 활성화
        };
      })
    );
  }, [nowPage]);  // nowPage가 변경될 때만 useEffect가 실행되도록 설정

  const moveNavigation = (item, index) => {
    setNavListItems(prevItems =>
      prevItems.map((navItem, idx) => ({
        ...navItem,
        status: idx === index,  // 클릭한 항목만 활성화
      }))
    );
    dispatch(setPageValue({ nowPage: index })); // nowPage 상태 업데이트
  };

  useEffect(() => {
    if (nowPage !== null) {  // nowPage가 유효한 경우에만 스크롤 이동
      const browserHeight = window.innerHeight;
      scroll.scrollTo(browserHeight * nowPage);
      console.log(nowPage)
    }
  }, [nowPage]);

  const openSupportPopup = () => {
    window.open(
      'https://939.co.kr/slk2671/',
      '_blank',
      'width=1120,height=700'
    )
  }

  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMounted(false)
    }, 600)
  })

  return (
    <header className={`animate__animated ${mounted ? 'animate__fadeInDown' : ''}`}>
      <h1>
        <img src="/images/img_logo_color.png" alt="JB전북연합" />
      </h1>

      <ul className={`nav_list ${addClassMenu ? 'active' : ''}`}>
        {navListItems.map((item, index) => (
          <li
            key={index}
            className={`${item.status ? 'active' : ''}`}
            onClick={() => moveNavigation(item, index)}
          >
            {item.title}
          </li>
        ))}
      </ul>

      <div className={`function_group ${addClassMenu ? 'active' : ''}`}>
        <a href="https://jeonbuk.edudongne.com/join.html" target="_self" className="animate__animated scale">
          <button>
            <i className="icon nav_signup"/>
            <span>가입문의</span>
          </button>
        </a>

        <a href="https://jb.edudongne.com/login" target="_blank" className="animate__animated scale">
          <button>
            <i className="icon nav_start"/>
            <span>시작하기</span>
          </button>
        </a>

        <a onClick={openSupportPopup} className="animate__animated scale">
          <button>
            <i className="icon nav_support"/>
            <span>원격지원</span>
          </button>
        </a>
      </div>

      <i className="icon menu" onClick={() => activeMenu()}/>
    </header>
);
};

export default Header;
"use client"

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import {useSelector} from "react-redux";

const Header = () => {
  const nowPage = useSelector(state => state.userCommon.nowPage);

  const [navListItems, setNavListItems] = useState([
    { id: 1, title: 'JB학원연합', status: false },
    { id: 2, title: '선택의 이유', status: false },
    { id: 3, title: '세가지 강점', status: false },
    { id: 4, title: '솔루션의 기능', status: false },
    { id: 5, title: '오시는 길', status: false },
  ])

  // useEffect(() => {
  //   const updatedNavListItems = navListItems.map((item, index) => {
  //     if (nowPage === index) {
  //       return { ...item, status: !item.status };
  //     } else {
  //       return { ...item, status: false };
  //     }
  //   })
  //
  //   setNavListItems(updatedNavListItems);
  // }, [nowPage, navListItems])


  const moveNavigation = (item, index) => {
    setNavListItems(prevItems =>
      prevItems.map((navItem, idx) => {
        if (idx === index) {
          return { ...navItem, status: !navItem.status };
        } else {
          return { ...navItem, status: false };
        }
      })
    )
    const browserHeight = window.innerHeight
    scroll.scrollTo(browserHeight * index)
  }


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
        <Image
          src="/images/img_logo_color.png"
          alt="JB전북연합"
          className="dark:invert"
          width={162}
          height={48}
          priority
        />
      </h1>

      <ul className="nav_list">
        {navListItems.map((item, index) => (
          <li
            key={index}
            className={`${item.status ? 'active' : ''}`}
            onClick={() => moveNavigation(item, index)}
          >{item.title}</li>
        ))}
      </ul>

      <div className="function_group">
        <Link href="https://daejeon.edudongne.com/woori_join.html" target="_blank" className="animate__animated scale">
          <button>
            <i className="icon nav_signup"/>
            <span>가입문의</span>
          </button>
        </Link>
        <Link href="https://woori2.edudongne.com/login" target="_blank" className="animate__animated scale">
          <button>
            <i className="icon nav_start"/>
            <span>시작하기</span>
          </button>
        </Link>
        <a onClick={openSupportPopup} className="animate__animated scale">
          <button>
            <i className="icon nav_support"/>
            <span>원격지원</span>
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
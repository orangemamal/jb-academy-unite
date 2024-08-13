"use client";

import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import SectionFirst from "@/components/section/sectionFirst";
import SectionSecond from "@/components/section/sectionSecond";
import SectionThird from "@/components/section/sectionThird";
import SectionFourth from "@/components/section/sectionFourth";
import SectionFifth from "@/components/section/sectionFifth";
import {setPageValue} from "@/lib/userCommon";

const Main = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(0); // 현재 페이지를 추적하는 상태
  const [scrollTimeout, setScrollTimeout] = useState(null); // 스크롤 디바운스 타이머


  useEffect(() => {
    const handleScroll = (e) => {
      if (scrollTimeout) clearTimeout(scrollTimeout); // 이전 타이머 클리어

      // 디바운스 설정: 200ms 후에 실행
      const newScrollTimeout = setTimeout(() => {

        // 스크롤 감도 조절: deltaY 값에 스케일러 곱하기
        const scrollSensitivity = 2.5; // 감도 조절 값 (작을수록 민감하게 반응)
        const scaledDeltaY = e.deltaY * scrollSensitivity;

        // 페이지 이동 로직
        if (scaledDeltaY > 0) {
          setPage((prevPage) => Math.min(prevPage + 1, 5)); // 최대 4페이지로 제한 (5페이지 - 1)
        } else if (scaledDeltaY < 0) {
          setPage((prevPage) => Math.max(prevPage - 1, 0)); // 최소 0페이지로 제한
        }
      }, 200);

      setScrollTimeout(newScrollTimeout); // 새로운 타이머 설정
    };

    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      touchEndY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (touchStartY - touchEndY > 0) {
        // 스와이프 업
        setPage((prevPage) => Math.min(prevPage + 1, 5)); // 최대 5페이지로 제한
      } else if (touchEndY - touchStartY > 0) {
        // 스와이프 다운
        setPage((prevPage) => Math.max(prevPage - 1, 0)); // 최소 0페이지로 제한
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    console.log(page)

    window.scrollTo({
      top: windowHeight * page,
      behavior: "smooth",
    });

    dispatch(setPageValue({ nowPage: page }))
  }, [page]);

  return (
    <main>
      <SectionFirst />
      <SectionSecond />
      <SectionThird />
      <SectionFourth />
      <SectionFifth />
    </main>
  );
};

export default Main;

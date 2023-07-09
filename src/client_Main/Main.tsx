import React, { useEffect, useRef, useState } from 'react';
import mainStyle from './main.module.scss';
import Banner from './Banner';
import { IconButton } from '@mui/material';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import SecondSection from './SecondSection';
import BTN from 'BTN_group/BTN';

export default function Main(): React.JSX.Element {
  const mainRef = useRef<HTMLInputElement>(null);

  // 스크롤포지션 저장
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  // 스크롤 값 인지
  const scrollHandle = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setScrollPosition((cur: number) => window.scrollY);
  };

  // 마운트시 스크롤핸들 작동하여 위치 값을 담음
  useEffect(() => {
    window.addEventListener('scroll', scrollHandle);

    return () => {
      window.addEventListener('scroll', scrollHandle);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      console.log(e);
      e.forEach((el) => {
        if (el.isIntersecting) {
          (el.target as HTMLElement).style.opacity = '1';
        } else {
          (el.target as HTMLElement).style.opacity = '0';
        }
      });
    });

    Array.prototype.forEach.call(mainRef.current?.children, (child) => {
      observer.observe(child);
    });
  }, []);

  return (
    <main className={mainStyle.container} ref={mainRef}>
      <IconButton className={mainStyle.messageIcon} aria-label="MarkChatUnread">
        <MarkChatUnreadIcon fontSize="inherit" />
      </IconButton>
      <Banner />
      <SecondSection />
      <div
        className={`${
          scrollPosition > 20 ? mainStyle.bottomMenuOn : mainStyle.bottomMenu
        }`}
      >
        <div className={mainStyle.bottomMenuWrap}>
          <BTN color="secondary">사례 확인하기</BTN>
          <BTN color="info">상담 신청하기</BTN>
        </div>
      </div>
    </main>
  );
}

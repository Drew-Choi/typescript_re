import React, { useEffect, useRef, useState } from 'react';
import mainStyle from './main.module.scss';
import Banner from './Banner';
import { IconButton } from '@mui/material';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import BTN from 'BTN_group/BTN';
import styled from 'styled-components';

const Phone_start = styled.img<{ position?: number }>`
  position: fixed;
  display: ${({ position }) => `${(position || 0) > 80 ? 'block' : 'none'}`};
  left: ${({ position }) =>
    `${
      -700 + 10 + (position || 0) >= -60 ? -60 : -700 + 10 + (position || 0)
    }px`};
  bottom: ${({ position }) =>
    `${
      -600 + 10 + (position || 0) >= 40 ? 40 : -600 + 10 + (position || 0)
    }px`};
  z-index: 5;
  transform: scale(1.2)
    ${({ position }) =>
      `${(position || 0) >= 850 ? `rotate(20deg)` : 'rotate(0deg)'}`};
  transition: 0.2s ease-out;
`;

export default function Main(): React.JSX.Element {
  // const mainRef = useRef<HTMLInputElement>(null);

  // 스크롤포지션 저장
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  console.log(scrollPosition);

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

  // useEffect(() => {
  //   const observer = new IntersectionObserver((e) => {
  //     e.forEach((el) => {
  //       if (el.isIntersecting) {
  //         (el.target as HTMLElement).style.opacity = '1';
  //         (el.target as HTMLElement).style.transition = '1s ease';
  //       } else {
  //         (el.target as HTMLElement).style.opacity = '0';
  //       }
  //     });
  //   });

  //   Array.prototype.forEach.call(mainRef.current?.children, (child) => {
  //     observer.observe(child);
  //   });
  // }, []);

  return (
    <main className={mainStyle.container}>
      <IconButton className={mainStyle.messageIcon} aria-label="MarkChatUnread">
        <MarkChatUnreadIcon fontSize="inherit" />
      </IconButton>
      <Banner />
      <Phone_start
        position={scrollPosition}
        src="./phone_hand_locked.webp"
        alt="phon_start"
      />
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

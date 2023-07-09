import React, { useEffect, useState } from 'react';
import mainStyle from './main.module.scss';
import Banner from './Banner';

export default function Main(): React.JSX.Element {
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

  return (
    <main className={mainStyle.container}>
      <Banner position={scrollPosition} />
    </main>
  );
}

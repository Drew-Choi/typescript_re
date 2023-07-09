import React from 'react';
import bannerStyle from './banner.module.scss';

export default function Banner({
  position,
}: {
  position: number;
}): React.JSX.Element {
  return (
    <div className={bannerStyle.container}>
      <p className={bannerStyle.desc}>
        태블릿이 필요없는
        <br /> 합리적인 테이블 오더, <br /> 태그히어
      </p>

      <div className={bannerStyle.deco}></div>
      <div className={bannerStyle.img}></div>
    </div>
  );
}

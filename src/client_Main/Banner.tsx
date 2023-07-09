import React from 'react';
import bannerStyle from './banner.module.scss';
import BTN from 'BTN_group/BTN';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Banner({
  position,
}: {
  position: number;
}): React.JSX.Element {
  return (
    <div className={bannerStyle.container}>
      <div className={bannerStyle.img}></div>
      <div className={bannerStyle.meterialWrap}>
        <div className={bannerStyle.descWrap}>
          <p className={bannerStyle.desc}>
            태블릿이 필요없는
            <br /> 합리적인 테이블 오더, <br /> 태그히어
          </p>
          <BTN size="large" className={bannerStyle.mainBtn}>
            태그히어 서비스 상담신청
          </BTN>
          <p className={bannerStyle.subDesc}>자세히 보기</p>
          <KeyboardDoubleArrowDownIcon className={bannerStyle.arrowIcon} />
        </div>
      </div>
    </div>
  );
}

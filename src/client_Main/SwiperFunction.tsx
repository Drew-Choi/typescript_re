import React, { useState } from 'react';
import swiperStyle from './swiper.module.scss';
import SwiperCore from 'swiper';
import Pagination from 'swiper';
import Navigation from 'swiper';
import Mousewheel from 'swiper';
import A11y from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation]);

export default function SwiperFunction(): React.JSX.Element {
  const [swiperEl, setSwiperEl] = useState<any>(null);
  const [pagination1, setPagination1] = useState<string>('on');
  const [pagination2, setPagination2] = useState<string>('off');
  const [pagination3, setPagination3] = useState<string>('off');
  const [pagination4, setPagination4] = useState<string>('off');
  const [pagination5, setPagination5] = useState<string>('off');

  return (
    <div className={swiperStyle.container}>
      <div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y, Mousewheel]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation={true}
          // pagination={{ clickable: true }}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onSwiper={(swiper) => setSwiperEl((cur: any) => swiper)}
          // onSlideChange={() => console.log('slide change')}
          onActiveIndexChange={(swiper) => {
            swiper.activeIndex !== 0
              ? setPagination1((cur) => 'off')
              : setPagination1((cur) => 'on');
            swiper.activeIndex !== 1
              ? setPagination2((cur) => 'off')
              : setPagination2((cur) => 'on');
            swiper.activeIndex !== 2
              ? setPagination3((cur) => 'off')
              : setPagination3((cur) => 'on');
            swiper.activeIndex !== 3
              ? setPagination4((cur) => 'off')
              : setPagination4((cur) => 'on');
            swiper.activeIndex !== 4
              ? setPagination5((cur) => 'off')
              : setPagination5((cur) => 'on');
          }}
          mousewheel={false}
          className="swiper_container"
        ></Swiper>
      </div>
    </div>
  );
}

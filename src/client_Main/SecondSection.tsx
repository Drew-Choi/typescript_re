import React from 'react';
import secondStyle from './secondSection.module.scss';

export default function SecondSection(): React.JSX.Element {
  return (
    <section className={secondStyle.container}>
      <div className={secondStyle.wrap}>
        <h1>2번째 페이지</h1>
      </div>
    </section>
  );
}

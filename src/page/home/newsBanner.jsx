import React from 'react';
import { Carousel } from 'antd';

const NewsBanner = () => {
  return (
    <Carousel autoplay>
      <div>
        <div className="carousel-pic" style={{ backgroundImage: `url(/asset/img/banner2.jpeg)` }} />
      </div>
      <div>
        <div className="carousel-pic" style={{ backgroundImage: `url(/asset/img/banner3.jpeg)` }} />
      </div>
      <div>
        <div
          className="carousel-pic"
          style={{
            backgroundImage: `url(/asset/img/banner4.jpeg)`,
            backgroundPositionY: '-100px'
          }}
        />
      </div>
    </Carousel>
  );
};

export default NewsBanner

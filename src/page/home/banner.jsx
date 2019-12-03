import React, { useEffect } from "react";
import { toJS } from "mobx";
import { Carousel } from "antd";
import { observer } from "mobx-react";
import useStores from "~/hooks/useStores";
import { filePath } from "~/constants";

const Banner = () => {
  const { homeStore } = useStores();
  useEffect(() => {
    homeStore.getBanners();
  }, []);
  return (
    <Carousel autoplay>
      {homeStore.banners.map((banner, index) => (
        <div key={index}>
          <div
            className="carousel-pic"
            style={{ backgroundImage: `url(${filePath}/${banner.imgUrl})` }}
          />
        </div>
      ))}
      {/* <div className="carousel-pic-wrap">
        <div
          className="carousel-pic"
          style={{ backgroundImage: `url(/asset/img/banner1.jpeg)` }}
        >
          <div className="carousel-pic-title">
            <h1>浙江食品安全抽查评价系统研究</h1>
            <p>
              宁波出入境检验检疫研究院、浙江出入境检验检疫研究院、浙江科技学院食品安全研究所
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          className="carousel-pic"
          style={{ backgroundImage: `url(/asset/img/banner2.jpeg)` }}
        />
      </div>
      <div>
        <div
          className="carousel-pic"
          style={{ backgroundImage: `url(/asset/img/banner3.jpeg)` }}
        />
      </div>
      <div>
        <div
          className="carousel-pic"
          style={{
            backgroundImage: `url(/asset/img/banner4.jpeg)`,
            backgroundPositionY: "-450px"
          }}
        />
      </div> */}
    </Carousel>
  );
};

export default observer(Banner);

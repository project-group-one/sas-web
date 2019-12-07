import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { filePath } from "~/constants";

import useStores from "~/hooks/useStores";

const NewsBanner = () => {
  const { homeStore } = useStores();

  return (
    <Carousel autoplay>
      {homeStore.banners.map((banner, index) => {
        const pic = (
          <div
            className="carousel-pic"
            style={{ backgroundImage: `url(${filePath}/${banner.imgUrl})` }}
          />
        );

        return banner.url ? (
          banner.url.indexOf("http") > -1 ? (
            <a key={index} href={banner.url}>
              {pic}
            </a>
          ) : (
            <Link key={index} to={banner.url}>
              {pic}
            </Link>
          )
        ) : (
          <div key={index}>{pic}</div>
        );
      })}
      {/* <div>
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
            backgroundPositionY: "-100px"
          }}
        />
      </div> */}
    </Carousel>
  );
};

export default NewsBanner;

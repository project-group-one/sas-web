import React from "react";
import FoodType from "./foodType";
import FoodRegulation from "./foodRegulation";

import "./index.less";

const Food = () => {
  return (
    <>
      {/* <div className="home-header">
                <div className="w">国家食品安全监督抽检项目查询系统</div>
            </div> */}
      <div className="inside-body">
        <div className="inside-body-left">
          <FoodType />
        </div>
        <div
          className="inside-body-right"
          style={{ width: "calc(100% - 300px)" }}
        >
          <FoodRegulation />
        </div>
      </div>
    </>
  );
};

export default Food;

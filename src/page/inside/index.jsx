import React from 'react'
import FoodType from './foodType'

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
                <div className="inside-body-right"></div>
            </div>
        </>
    )
}

export default Food

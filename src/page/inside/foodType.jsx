import React, { useEffect } from 'react'
import { observer } from "mobx-react";
import useStores from '~/hooks/useStores'
import { Tree } from 'antd'

const FoodType = () => {
    const { foodStore } = useStores()

    useEffect(() => {
        foodStore.getFoodTypes()
    }, [])

    return <Tree showLine treeData={foodStore.types} onSelect={key => console.log(key)} />
}

export default observer(FoodType)

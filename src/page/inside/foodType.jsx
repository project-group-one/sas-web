import React, { useEffect } from "react";
import { observer } from "mobx-react";
import useStores from "~/hooks/useStores";
import { Tree } from "antd";

const FoodType = () => {
  const { foodStore } = useStores();
  const handleSelect = key => {
    if (!key) return;
    foodStore.getFoodRegulation(key);
  };

  useEffect(() => {
    foodStore.getFoodTypes();
  }, []);

  return (
    <Tree
      showLine
      treeData={foodStore.types}
      selectedKeys={[foodStore.selectedKey + '']}
      onSelect={keys => handleSelect(keys[0])}
    />
  );
};

export default observer(FoodType);

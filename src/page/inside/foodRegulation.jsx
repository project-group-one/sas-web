import React from "react";
import { observer } from "mobx-react";
import useStores from "~/hooks/useStores";

const FoodRegulation = () => {
  const { foodStore } = useStores();
  const { regulation } = foodStore;

  return (
    <div className="food-regulation">
      <table border={1}>
        {regulation.range && (
          <tr>
            <th>适用范围</th>
            <td>{regulation.range}</td>
          </tr>
        )}
        {regulation.category && (
          <tr>
            <th>产品种类</th>
            <td>{regulation.category}</td>
          </tr>
        )}
        {regulation.samplingBasis && (
          <tr>
            <th>抽检依据</th>
            <td>{regulation.samplingBasis}</td>
          </tr>
        )}
        {regulation.demand && (
          <tr>
            <th>抽检要求</th>
            <td>{regulation.demand}</td>
          </tr>
        )}
        {regulation.conclusion && (
          <tr>
            <td colspan="2">
              <div>
                <h4>判定原则与结论</h4>
                <p>{regulation.conclusion}</p>
              </div>
            </td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default observer(FoodRegulation);

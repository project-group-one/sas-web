import React from "react";
import { observer } from "mobx-react";
import useStores from "~/hooks/useStores";
import { Empty } from "antd";

const FoodRegulation = () => {
  const { foodStore } = useStores();
  const { regulation } = foodStore;

  if (!regulation) {
    return <Empty style={{ marginTop: 100 }} />;
  }

  return (
    <div className="food-regulation">
      <table border={1}>
        {regulation.range && (
          <tr>
            <th>适用范围</th>
            <td>
              <pre>{regulation.range}</pre>
            </td>
          </tr>
        )}
        {regulation.category && (
          <tr>
            <th>产品种类</th>
            <td>
              <pre>{regulation.category}</pre>
            </td>
          </tr>
        )}
        {regulation.samplingBasis && (
          <tr>
            <th>抽检依据</th>
            <td>
              <pre>{regulation.samplingBasis}</pre>
            </td>
          </tr>
        )}
        {regulation.demand && (
          <tr>
            <th>抽检要求</th>
            <td>
              <pre>{regulation.demand}</pre>
            </td>
          </tr>
        )}
        {regulation.conclusion && (
          <tr>
            <td colspan="2">
              <div>
                <h4>判定原则与结论</h4>
                <p>
                  <pre>{regulation.conclusion}</pre>
                </p>
              </div>
            </td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default observer(FoodRegulation);

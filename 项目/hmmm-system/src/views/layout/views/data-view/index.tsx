import React from "react";
// 导入mobx
import { observer } from "mobx-react";

function Page1() {
  return (
    <div>
      页面1
      <div>123</div>
    </div>
  );
}

export default observer(Page1);
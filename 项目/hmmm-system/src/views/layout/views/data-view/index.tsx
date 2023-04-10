import React from 'react';
// 导入mobx
import { observer } from 'mobx-react';

function Page1(props: any) {
  return (
    <div>
        页面1
      <div>{ props.store.counter }</div>
    </div>
  );
}

export default observer(Page1);
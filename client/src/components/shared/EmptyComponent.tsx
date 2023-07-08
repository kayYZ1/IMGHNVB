import React from 'react';
import { Empty } from 'antd';

import AddImageModal from '../modals/AddImageModal';

const EmptyComponent: React.FC = () => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{ height: 60 }}
    description={
      <span>
        <a>Nothing here yet..</a>
      </span>
    }
  >
    <AddImageModal />
  </Empty>
);

export default EmptyComponent;
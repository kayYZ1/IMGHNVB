import React from 'react';
import { Button, Empty } from 'antd';
import { Link } from 'react-router-dom';

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
    <Link to="/App/Image-Edit">
      <Button type="primary">Add an image now</Button>
    </Link>
  </Empty>
);

export default EmptyComponent;
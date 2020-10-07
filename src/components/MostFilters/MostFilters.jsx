import React from 'react';
import { Radio } from 'antd';

const LABELS = ['Самый дешевый', 'Самый быстрый'];

const MostFilters = () => {
  const mostButtons = LABELS.map((most) => {
    return <Radio.Button value={most}>{most}</Radio.Button>;
  });

  return (
    <div style={{ marginBottom: '20px' }}>
      <Radio.Group defaultValue="Самый дешевый" buttonStyle="solid">
        {mostButtons}
      </Radio.Group>
    </div>
  );
};

export default MostFilters;

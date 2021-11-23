import {CSSProperties} from 'react';
import {Menu} from 'antd';
import {Sample} from 'types';
import {
  BoxPlotOutlined,
  HeatMapOutlined,
  CompressOutlined,
  SlidersOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';

export type NavMenuProps = {
  onChange: (sample: Sample) => void;
}

export const NavMenu = ({onChange}: NavMenuProps) => {

  return (
    <Menu>
      <Menu.Item onClick={() => onChange('Hide')}>
        <BoxPlotOutlined/> Hide
      </Menu.Item>
      <Menu.Item onClick={() => onChange('Count')}>
        <SlidersOutlined/> Count
      </Menu.Item>
      <Menu.Item><HeatMapOutlined/> Cooling</Menu.Item>
      <Menu.Item><CompressOutlined/> Pressure</Menu.Item>
      <Menu.Item><ThunderboltOutlined/> Power</Menu.Item>
    </Menu>
  );
};

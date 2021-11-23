import {Menu} from 'antd';
import {Sample} from 'types';
import {
  BoxPlotOutlined,
  HeatMapOutlined,
  CompressOutlined,
  SlidersOutlined,
  LineHeightOutlined,
  DeleteRowOutlined,
  PullRequestOutlined,
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
      <Menu.Item onClick={() => onChange('Each')}>
        <HeatMapOutlined/> ForEach
      </Menu.Item>
      <Menu.Item onClick={() => onChange('Filter')}>
        <CompressOutlined/> Filter
      </Menu.Item>
      <Menu.Item onClick={() => onChange('Map')}>
        <LineHeightOutlined/> Map
      </Menu.Item>
      <Menu.Item onClick={() => onChange('Wrap')}>
        <DeleteRowOutlined/> Wrap
      </Menu.Item>
      <Menu.Item onClick={() => onChange('Inject')}>
        <PullRequestOutlined/> Inject
      </Menu.Item>
    </Menu>
  );
};

import {AppSample} from 'app.sample';
import {Highlight} from '../Highlight';
import {Card, Collapse, Typography, Tag, Switch, Rate, Breadcrumb} from 'antd';
import {FC, Children} from 'react';

export const Map = () => {
  return (
    <Card>
      <Typography.Title level={2}>Wrapping children</Typography.Title>
      <Highlight code={AppSample.map}/>
      <Wrapper>
        <Breadcrumb>
          <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
          <Breadcrumb.Item>Component</Breadcrumb.Item>
          <Breadcrumb.Item>General</Breadcrumb.Item>
          <Breadcrumb.Item>Button</Breadcrumb.Item>
        </Breadcrumb>
        <Tag color="magenta">magenta</Tag>
        <Switch defaultChecked/>
        <Rate tooltips={['Starts']}/>
      </Wrapper>
    </Card>
  );
};

export const Wrapper: FC = ({children}) => {
  const wrappedChildren = Children.map(children, (child, index) => {
    const head = (child as any).type.displayName || (child as any).type.name;
    return (
      <Collapse.Panel key={index} header={head}>
        {child}
      </Collapse.Panel>
    );
  });

  return (
    <div>
      <Typography.Title level={4}>Before</Typography.Title>
      {children}
      <Typography.Title level={4}>After</Typography.Title>
      <Collapse defaultActiveKey={[1]}>
        {wrappedChildren}
      </Collapse>
    </div>
  );
};

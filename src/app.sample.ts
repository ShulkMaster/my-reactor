export const AppSample = {
  hide: `
import {Card, Checkbox} from 'antd';
import {useState, FC} from 'react';
export const Hide: FC = ({children}) => {
  const [show, setShow] = useState(true);
  return (
    <Card>
      <Card.Meta>
        <Checkbox checked={show} onChange={() => setShow(!show)}>Mostrar</Checkbox>
      </Card.Meta>
      {show && children}
    </Card>
  );
};`,
  count1: `
import {Typography} from 'antd';
import {FC, Children, CSSProperties} from 'react';

const CounterChild: FC = ({children}) => {
  const numberOfChildren = Children.count(children);
  const style: CSSProperties = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  };
  return (
    <>
      <Typography.Title level={3}>Number of children {numberOfChildren}</Typography.Title>
      <div style={style}>{children}</div>
    </>
  );
};
  `,
  count2: `
import {Typography} from 'antd';
import {FC, Children, CSSProperties} from 'react';

const AlterChild: FC = ({children}) => {
  const isOdd = Children.count(children) % 2 === 0;
  const style: CSSProperties = {
    width: 80,
    height: 80,
    background: isOdd ? '#dff' : '#fdd',
    textAlign: 'center',
    lineHeight: 6,
  };

  return (
    <>
      <Typography.Title level={3}>Blue if children amount is odd</Typography.Title>
      <div style={style}>
        {Children.count(children)}
      </div>
      {children}
    </>
  );
};
  `,
  each1: `
import {Typography, Divider} from 'antd';
import {FC, Children, ReactNode} from 'react';

export const AddDivider: FC = ({children}) => {
  const separateChildren: ReactNode[] = [];
  Children.forEach(children, child => {
    separateChildren.push(child);
    separateChildren.push(<Divider/>);
  });

  return (
    <div>
      <Typography.Title level={4}>Before</Typography.Title>
      {children}
      <Typography.Title level={4}>After</Typography.Title>
      {separateChildren}
    </div>
  );
};
  `,
  each2: `
import {cloneDeepWith} from 'lodash';
import {Highlight} from 'components/Highlight';
import {List} from 'antd';
import { FC, Children} from 'react';

export const Inspect: FC = ({children}) => {
  const items: string[] = [];
  Children.forEach(children, child => {
    if (!child) return;
    if (typeof child === 'object' && 'props' in child) {
      const clone = cloneDeepWith(child.props, (value) => {
        return value.children.map(c => ({...c, _owner: null}));
      });
      const output = JSON.stringify(clone, null, 2);
      items.push(output);
    }
  });
  return (
    <List>
      {items.map((code, index) => (
        <List.Item key={index}>
          <Highlight code={code}/>
        </List.Item>
      ))}
    </List>
  );
};
  `,
  map: `
import {Collapse, Typography} from 'antd';
import {FC, Children} from 'react';

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
  `,
} as const;

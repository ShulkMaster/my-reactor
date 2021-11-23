import {AppSample} from 'app.sample';
import {Highlight} from 'components/Highlight';
import {Card, Checkbox, Typography} from 'antd';
import {useState, FC} from 'react';

export const Hide: FC = ({children}) => {
  const [show, setShow] = useState(true);
  return (
    <Card>
      <Typography.Title level={2}>Dynamic displaying children</Typography.Title>
      <Checkbox checked={show} onChange={() => setShow(!show)}>Mostrar</Checkbox>
      {show && children}
      <Highlight code={AppSample.hide}/>
    </Card>
  );
};

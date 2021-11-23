import {AppSample} from 'app.sample';
import {Highlight} from 'components/Highlight';
import {Card, Checkbox} from 'antd';
import {useState, FC} from 'react';

export const Hide: FC = ({children}) => {
  const [show, setShow] = useState(true);
  return (
    <div style={{padding: '2em'}}>
      <Highlight code={AppSample.hide}/>
      <Card>
        <Checkbox checked={show} onChange={() => setShow(!show)}>Mostrar</Checkbox>
        {show && children}
      </Card>
    </div>
  );
};

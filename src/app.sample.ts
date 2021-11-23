export const AppSample ={
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
};
`
} as const;

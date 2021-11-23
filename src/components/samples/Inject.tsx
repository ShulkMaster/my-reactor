import {CheckboxChangeEvent} from 'antd/es/checkbox';
import {Highlight} from 'components/Highlight';
import {InputNumberProps} from 'antd/lib/input-number';
import {InputProps} from 'antd/lib/input/Input';
import {
  Card,
  Typography,
  Switch,
  Checkbox,
  CheckboxProps,
  Input,
  InputNumber,
  DatePicker,
  DatePickerProps,
} from 'antd';
import MonLib, {Moment} from 'moment';
import {useState, ReactElement, Children, cloneElement} from 'react';

export type AppSettings = {
  mainSetting: boolean;
  setting1: boolean;
  setting2: boolean;
  setting3: boolean;
  setting4: boolean;
  setting5: string;
  setting6: number;
  setting7: number;
  setting8: number;
  settingDate: Moment;
}

export const Inject = () => {
  const [settings, setSettings] = useState<AppSettings>({
    mainSetting: true,
    setting1: true,
    setting2: false,
    setting3: true,
    setting4: false,
    setting5: 'my value',
    setting6: 8,
    setting7: 4,
    setting8: 5,
    settingDate: MonLib(new Date()),
  });

  const partialUpdate = (partial: Partial<AppSettings>): void => {
    console.log(partial);
    setSettings(old => ({...old, ...partial}));
  };
  const newCode = JSON.stringify(settings, null, 2);

  return (
    <Card>
      <Typography.Title level={2}>Injecting/overriding new props</Typography.Title>
      <Highlight code={newCode}/>
      <Injector title="The main" settings={settings} onChange={partialUpdate}>
        <p>This is setting 1</p>
        <Checkbox key="setting1">setting1</Checkbox>
        <p>This is setting 2</p>
        <Checkbox key="setting2">setting2</Checkbox>
        <p>This is setting 3</p>
        <Checkbox key="setting3">setting3</Checkbox>
        <p>This is setting 4</p>
        <Checkbox key="setting4">setting4</Checkbox>
        <Input key="setting5"/>
        <InputNumber key="setting6" min={0} max={100}/>
        <InputNumber key="setting7" min={2} max={50}/>
        <InputNumber key="setting8" min={4} max={10}/>
        <DatePicker key="settingDate" allowClear={false}/>
      </Injector>
      <br/>
      <p style={{fontSize: '2rem'}}>{newCode}</p>
    </Card>
  );
};

export type InjectorProps = {
  title: string;
  settings: AppSettings;
  onChange: (change: Partial<AppSettings>) => void;
  children: ReactElement[];
}

export const Injector = ({children, settings, onChange, title}: InjectorProps) => {
  const checked = settings.mainSetting;

  const changeHandle = <T extends keyof AppSettings>(key: T, value: AppSettings[T]) => {
    onChange({[key]: value});
  };

  const clonedChildren = Children.map(children, child => {
    const type = child.type;
    if (typeof type === 'string') return child;
    const key = child.key as keyof AppSettings;
    if (type === Checkbox) {
      return cloneElement<CheckboxProps>(child, {
        disabled: !checked,
        checked: Boolean(settings[key]),
        onChange: (evt: CheckboxChangeEvent) => changeHandle(key, evt.target.checked),
      });
    }
    if (type === Input) {
      return cloneElement<InputProps>(child, {
        disabled: !checked,
        value: settings[key].toString(),
        onChange: (evt) => changeHandle(key, evt.target.value),
      });
    }
    if (type === InputNumber) {
      return cloneElement<InputNumberProps>(child, {
        disabled: !checked,
        value: Number(settings[key]),
        onChange: (evt) => changeHandle(key, evt),
      });
    }
    if (type === DatePicker) {
      return cloneElement<DatePickerProps>(child, {
        disabled: !checked,
        value: settings[key] as Moment,
        onChange: (date) => changeHandle(key, date || MonLib()),
      });
    }
    return child;
  });

  return (
    <Card hoverable bordered>
      <Card.Meta>
        <Typography.Title level={4} children={title}/>
      </Card.Meta>
      <Switch checked={checked} onChange={e => changeHandle('mainSetting', e)}/>
      {clonedChildren}
    </Card>
  );
};

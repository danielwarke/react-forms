import { componentTypes } from '@data-driven-forms/react-form-renderer';
import SubForm from './sub-form';
import Tabs from './tabs';
import TextField from './text-field';
import TextArea from './text-area';
import Checkbox from './checkbox';
import Switch from './switch';
import TimePicker from './time-picker';
import DatePicker from './time-picker';
import PlainText from './plain-text';
import Select from './select';
import Radio from './radio';

export const components = {
  TextField,
  TextArea,
  Select,
  Checkbox,
  Radio,
  Switch,
  DatePicker,
  TimePicker,
  PlainText,
  SubForm
};

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
  [componentTypes.TEXTAREA]: TextArea,
  [componentTypes.SELECT]: Select,
  [componentTypes.CHECKBOX]: Checkbox,
  [componentTypes.SUB_FORM]: SubForm,
  [componentTypes.RADIO]: Radio,
  [componentTypes.TABS]: Tabs,
  [componentTypes.DATE_PICKER]: DatePicker,
  [componentTypes.TIME_PICKER]: TimePicker,
  [componentTypes.SWITCH]: Switch,
  [componentTypes.PLAIN_TEXT]: PlainText
};

export default componentMapper;

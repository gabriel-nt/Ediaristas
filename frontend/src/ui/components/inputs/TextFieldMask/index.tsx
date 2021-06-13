import { OutlinedTextFieldProps } from '@material-ui/core';
import InputMask from 'react-input-mask';
import TextField from '../TextField';

interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
}

const TextFieldMask = ({
  mask,
  value,
  onChange,
  ...rest
}: TextFieldMaskProps) => (
  <InputMask mask={mask} value={value} onChange={onChange}>
    {() => <TextField {...rest} />}
  </InputMask>
);

export default TextFieldMask;

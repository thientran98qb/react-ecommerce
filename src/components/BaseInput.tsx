import { TextField } from '@mui/material';
import { Control, Controller, FieldValues, Path, RegisterOptions } from 'react-hook-form';

type UseControllerProps<TFieldValues extends FieldValues = FieldValues> = {
  name: Path<TFieldValues>;
  rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' >;
  onFocus?: () => void;
  defaultValue?: any;
  label?: string,
  control?: Control<TFieldValues>;
};

export const BaseInput = ({
  name,
  rules,
  control,
  label,
  defaultValue,
  ...inputProps
}: UseControllerProps) => {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <div className="base-input-wrapper">
          <TextField
            {...field}
            {...inputProps}
            size='small'
            fullWidth
            label={label}
            error={!!error}
            helperText={error ? error.message : ''}
          />
        </div>
      )}
    />
  );
};

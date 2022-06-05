import React from 'react';
import Icon from '@mui/material/Icon';
import Chip from '@mui/material/Chip';
import useTheme from '@mui/material/styles/useTheme';

type ChipColor =
  | 'default'
  | 'warning'
  | 'warning.main'
  | 'warning.light'
  | 'warning.dark'
  | 'success'
  | 'success.main'
  | 'success.light'
  | 'success.dark'
  | 'info'
  | 'info.main'
  | 'info.light'
  | 'info.dark'
  | 'primary'
  | 'primary.main'
  | 'primary.light'
  | 'primary.dark'
  | 'error'
  | 'error.main'
  | 'error.light'
  | 'error.dark'
  | 'secondary'
  | 'secondary.main'
  | 'secondary.light'
  | 'secondary.dark'
  | 'text.primary'
  | undefined;

interface ChipProps {
  variant?: 'filled' | 'outlined';
  color: ChipColor;
  label: string | undefined;
  icon: string | undefined;
}

const FoodologyChip = (props: ChipProps): React.ReactElement => {
  const { variant, label, icon, color } = props;
  const [textColor, setTextColor] = React.useState<string>();
  const [iconColor, setIconColor] = React.useState<string>();
  const [borderColor, setBorderColor] = React.useState<string>();
  const [backgroundColor, setBackgroundColor] = React.useState<string>();
  const theme = useTheme();

  React.useEffect(() => {
    if (variant === 'outlined') {
      setTextColor(color);
      setBorderColor(color);
      setBackgroundColor('');

      const colorIndexes = color?.split('.');
      if (colorIndexes?.length) {
        const palette = JSON.parse(JSON.stringify(theme.palette));
        const colorValue =
          colorIndexes?.length > 1
            ? palette[colorIndexes[0]][colorIndexes[1]]
            : palette[colorIndexes[0]];
        setIconColor(colorValue);
      }
    } else {
      setBackgroundColor(color);
      const chipTextColor = color ? 'white' : '';
      setIconColor(chipTextColor);
      setTextColor(chipTextColor);
    }
  }, [variant, color, theme.palette]);

  return (
    <Chip
      icon={<Icon sx={{ color: `${iconColor} !important` }}>{icon}</Icon>}
      label={label}
      variant={variant}
      sx={{
        backgroundColor,
        color: textColor,
        borderColor,
      }}
    />
  );
};

FoodologyChip.defaultProps = { variant: 'filled' };

export { FoodologyChip as default };

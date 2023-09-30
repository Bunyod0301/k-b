import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSliderr() {
  const [value, setValue] = React.useState<number[]>([0, 30]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
  <>
    <div className="price-slider-amount">
      <span>${value[0]} - ${value[1]}</span>
    </div>
    <Box>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        getAriaValueText={valuetext}
        color = {'warning' as any}
      />
    </Box>
  </>
  );
}
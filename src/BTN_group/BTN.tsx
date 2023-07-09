import React from 'react';
import { Button } from '@mui/material';

export default function BTN({
  children,
}: {
  children: any;
}): React.JSX.Element {
  return <Button>{children}</Button>;
}

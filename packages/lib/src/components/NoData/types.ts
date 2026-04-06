import { ReactNode } from 'react';

import { AlertProps, CenterProps } from '@mantine/core';

export interface NoDataProps extends CenterProps {
  title?: string;
  alertProps?: AlertProps;
  children?: ReactNode;
}

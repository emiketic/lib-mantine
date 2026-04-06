import { ReactNode } from 'react';
import { CenterProps, AlertProps } from '@mantine/core';

interface NoDataProps extends CenterProps {
    title?: string;
    alertProps?: AlertProps;
    children?: ReactNode;
}

export type { NoDataProps };

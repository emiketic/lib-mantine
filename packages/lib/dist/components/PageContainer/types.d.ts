import { ReactNode } from 'react';
import { ScrollAreaProps, TitleProps, GroupProps, StackProps, BoxProps } from '@mantine/core';

interface PageContainerProps extends ScrollAreaProps {
    title?: string;
    titleProps?: TitleProps;
    header?: ReactNode;
    headerProps?: GroupProps;
    rightSection?: ReactNode;
    withContentScroll?: boolean;
    fullPage?: boolean;
    contentProps?: StackProps | BoxProps;
    outerContentProps?: StackProps;
}

export type { PageContainerProps };

import { ReactNode } from 'react';

import { BoxProps, GroupProps, ScrollAreaProps, StackProps, TitleProps } from '@mantine/core';

export interface PageContainerProps extends ScrollAreaProps {
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

import * as react_jsx_runtime from 'react/jsx-runtime';
import { PageContainerProps } from './types.mjs';
import 'react';
import '@mantine/core';

declare function PageContainer({ children, title, titleProps, header, headerProps, rightSection, contentProps, outerContentProps, fullPage, withContentScroll, ...props }: PageContainerProps): react_jsx_runtime.JSX.Element;

export { PageContainer as default };

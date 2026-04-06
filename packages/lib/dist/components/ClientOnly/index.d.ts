import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare function ClientOnly({ children, withLoader, ...delegated }: {
    children: ReactNode;
    withLoader?: boolean;
}): react_jsx_runtime.JSX.Element | null;

export { ClientOnly as default };

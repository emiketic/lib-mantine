import * as react_jsx_runtime from 'react/jsx-runtime';
import { NativePDFViewerProps } from './types.mjs';
import 'react';

declare function NativePDFViewer({ mediaUrl, title, zoomLevel, withToolbar, fallback, }: NativePDFViewerProps): react_jsx_runtime.JSX.Element | null;

export { NativePDFViewer as default };

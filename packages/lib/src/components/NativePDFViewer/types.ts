import { ReactNode } from 'react';

export interface NativePDFViewerProps {
  mediaUrl?: string;
  title?: string;
  zoomLevel?: number;
  withToolbar?: boolean;
  fallback?: ReactNode | (() => ReactNode);
}

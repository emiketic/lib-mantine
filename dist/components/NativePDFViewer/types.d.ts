import { ReactNode } from 'react';

interface NativePDFViewerProps {
    mediaUrl?: string;
    title?: string;
    zoomLevel?: number;
    withToolbar?: boolean;
    fallback?: ReactNode | (() => ReactNode);
}

export type { NativePDFViewerProps };

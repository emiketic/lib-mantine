import { useState } from 'react';

import { Box, Center, Loader } from '@mantine/core';

import { NativePDFViewerProps } from './types';

function getBrowser() {
  const { userAgent } = navigator;
  const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
  const isEdge = /Edg\//.test(userAgent);
  const isFirefox = /Firefox\//.test(userAgent);
  const isChromium = /Chrome\/|CriOS\//.test(userAgent) && !isEdge;

  if (isSafari) return 'Safari';
  if (isEdge) return 'Edge';
  if (isFirefox) return 'Firefox';
  if (isChromium) return 'Chromium';
  return 'Unknown';
}

export default function NativePDFViewer({
  mediaUrl,
  title,
  zoomLevel,
  withToolbar = true,
  fallback = 'Cannot display PDF on this browser. Use a different browser or download the PDF.',
}: NativePDFViewerProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const toolbarHeight = {
    Safari: 0,
    Edge: 40,
    Firefox: 32,
    Chromium: 58,
    Unknown: 58,
  }[getBrowser()];

  let optionsString = '';
  if (zoomLevel) {
    optionsString += `#zoom=${zoomLevel}%`;
  }
  if (!withToolbar) {
    optionsString = '#toolbar=0';
  }

  const renderFallback = () => (typeof fallback === 'function' ? fallback() : fallback);

  if (!mediaUrl) {
    return null;
  }

  return (
    <Box
      w="100%"
      h={toolbarHeight ? `calc(100% + ${toolbarHeight}px)` : '100%'}
      style={{
        transform: toolbarHeight ? `translateY(-${toolbarHeight}px)` : undefined,
      }}
    >
      {loading ? (
        <Center h="100%" w="100%">
          <Loader size="xl" />
        </Center>
      ) : null}
      <object
        data={`${mediaUrl}${optionsString}`}
        type="application/pdf"
        width="100%"
        height="100%"
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      >
        <Box>{renderFallback()}</Box>
      </object>
    </Box>
  );
}

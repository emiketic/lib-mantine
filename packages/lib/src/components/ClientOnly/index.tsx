import { ReactNode, useEffect, useState } from 'react';

import { LoadingOverlay } from '@mantine/core';

export default function ClientOnly({
  children,
  withLoader = false,
  ...delegated
}: {
  children: ReactNode;
  withLoader?: boolean;
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    if (withLoader) {
      return <LoadingOverlay />;
    }
    return null;
  }

  return <div {...delegated}>{children}</div>;
}

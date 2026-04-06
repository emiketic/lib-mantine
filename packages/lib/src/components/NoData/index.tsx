import { Alert, Center } from '@mantine/core';

import { NoDataProps } from './types';

function NoData({ title, children, alertProps, ...props }: NoDataProps) {
  return (
    <Center h="100%" {...props}>
      <Alert p="3rem" title={title ?? 'No data'} {...alertProps}>
        <Center>{children}</Center>
      </Alert>
    </Center>
  );
}

export default NoData;

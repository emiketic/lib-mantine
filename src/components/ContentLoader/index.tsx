import { Fragment } from 'react';

import { Skeleton, Space, Stack } from '@mantine/core';

import { ContentLoaderProps } from './types';

function ContentLoader({
  numberOfBars = 3,
  numberOfBarGroups = 3,
  barHeight = 15,
  barSpacing = 6,
  barGroupSpacing = 'lg',
  visible = true,
  withCircle = false,
  ...props
}: ContentLoaderProps) {
  if (!visible) {
    return null;
  }

  return (
    <Stack gap="sm" px="5rem" py="md" {...props}>
      {withCircle ? <Skeleton height={70} circle mb="xl" /> : null}
      {Array.from({ length: numberOfBarGroups }).map((_, index) => (
        <Fragment key={index}>
          {Array.from({ length: Math.ceil(numberOfBars / numberOfBarGroups) }).map((_, index) => (
            <Fragment key={index}>
              <Skeleton height={barHeight} radius="xl" />
              <Skeleton height={barHeight} mt={barSpacing} radius="xl" />
              <Skeleton height={barHeight} mt={barSpacing} width="70%" radius="xl" />
            </Fragment>
          ))}
          <Space h={barGroupSpacing} />
        </Fragment>
      ))}
    </Stack>
  );
}

export default ContentLoader;

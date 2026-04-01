import { MantineSpacing, StackProps } from '@mantine/core';

export interface ContentLoaderProps extends StackProps {
  numberOfBars?: number;
  numberOfBarGroups?: number;
  barHeight?: number;
  barSpacing?: number;
  barGroupSpacing?: MantineSpacing;
  visible?: boolean;
  withCircle?: boolean;
}

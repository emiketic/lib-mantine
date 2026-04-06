import { StackProps, MantineSpacing } from '@mantine/core';

interface ContentLoaderProps extends StackProps {
    numberOfBars?: number;
    numberOfBarGroups?: number;
    barHeight?: number;
    barSpacing?: number;
    barGroupSpacing?: MantineSpacing;
    visible?: boolean;
    withCircle?: boolean;
}

export type { ContentLoaderProps };

import { BoxProps, MantineColor } from '@mantine/core';

interface LabelProps {
    confirm?: string | null;
    cancel?: string | null;
}
interface ConfirmBarProps extends BoxProps {
    onConfirm: () => void;
    onCancel?: () => void;
    labelProps?: LabelProps;
    disabled?: boolean;
    loading?: boolean;
    color?: MantineColor;
    withCancel?: boolean;
}

export type { ConfirmBarProps };

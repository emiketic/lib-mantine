import { Box, Button, Group } from '@mantine/core';

import { ConfirmBarProps } from './types';

function ConfirmBar({
  onConfirm = () => {},
  onCancel = () => {},
  disabled = false,
  loading = false,
  labelProps,
  color,
  withCancel = true,
  ...props
}: ConfirmBarProps) {
  return (
    <Box {...props}>
      <Group h="100%" justify="flex-end" align="center">
        {withCancel ? (
          <Button onClick={() => onCancel()} variant="subtle">
            {labelProps?.cancel ?? 'Cancel'}
          </Button>
        ) : null}
        <Button
          onClick={() => onConfirm()}
          disabled={disabled}
          variant="filled"
          loading={loading}
          color={color}
        >
          {labelProps?.confirm ?? 'Confirm'}
        </Button>
      </Group>
    </Box>
  );
}

export default ConfirmBar;

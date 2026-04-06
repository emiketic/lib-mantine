import {
  Switch,
  ThemeIcon,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';

import { IconMoon as IconSwitchDark, IconSun as IconSwitchLight } from '@tabler/icons-react';

import ClientOnly from '../ClientOnly';

import { ThemeToggleProps } from './types';

/**
 * Hooks and Mantine components run only after mount. Running color-scheme hooks
 * during SSR (outside ClientOnly) breaks under Next.js App Router: ThemeToggle
 * can render before MantineProvider context is available in that pass.
 */
function ThemeToggleInner({ ...props }: ThemeToggleProps) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <Tooltip
      label={computedColorScheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      position="bottom"
      withinPortal
    >
      <Switch
        styles={{ track: { cursor: 'pointer' } }}
        defaultChecked={computedColorScheme === 'dark'}
        onChange={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        onLabel={
          <ThemeIcon size={props.size ?? 'sm'} variant="transparent">
            <IconSwitchDark />
          </ThemeIcon>
        }
        offLabel={
          <ThemeIcon size={props.size ?? 'sm'} color="yellow" variant="transparent">
            <IconSwitchLight />
          </ThemeIcon>
        }
        color="dark"
        size="md"
        {...props}
      />
    </Tooltip>
  );
}

function ThemeToggle(props: ThemeToggleProps) {
  return (
    <ClientOnly>
      <ThemeToggleInner {...props} />
    </ClientOnly>
  );
}

export default ThemeToggle;

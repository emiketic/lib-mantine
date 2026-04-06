import { AvatarProps } from '@mantine/core';

interface LogoProps extends AvatarProps {
    /** Extract dominant color from the image and use it as a background. Defaults to true. */
    withColorPair?: boolean;
}

export type { LogoProps };

import { useEffect, useState } from 'react';

import { Avatar, ThemeIcon } from '@mantine/core';

import { getDominantColorFromImageUrl } from '../../utils/colors';

import { IconBuildingSkyscraper as IconFallback } from '@tabler/icons-react';

import { LogoProps } from './types';

function Logo({ withColorPair = true, ...props }: LogoProps) {
  const [logoColorPair, setLogoColorPair] = useState<{ dominant: string; background: string }>({
    dominant: '#000000',
    background: '#ffffff',
  });

  useEffect(() => {
    let isMounted = true;

    if (props.src && withColorPair) {
      getDominantColorFromImageUrl(props.src).then(({ dominant, background }) => {
        if (isMounted) {
          setLogoColorPair({ dominant, background });
        }
      });
    } else if (isMounted) {
      setLogoColorPair({ dominant: '#000000', background: '#ffffff' });
    }

    return () => {
      isMounted = false;
    };
  }, [props.src, withColorPair]);

  return (
    <Avatar
      size="5rem"
      radius="lg"
      p="0.125rem"
      bg={withColorPair ? logoColorPair.background : undefined}
      styles={{
        image: {
          objectFit: 'contain',
          objectPosition: 'center',
        },
      }}
      imageProps={{ referrerPolicy: 'no-referrer' }}
      {...props}
    >
      <ThemeIcon variant="transparent" size="5rem">
        <IconFallback size={48 * 1.5} stroke={1} />
      </ThemeIcon>
    </Avatar>
  );
}

export default Logo;

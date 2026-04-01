import { useEffect, useState } from 'react';

import { ActionIcon, Avatar, FileInput, Group, Image, Paper } from '@mantine/core';

import { IconUpload } from '@tabler/icons-react';

import { ImageInputProps } from './types';

const DEFAULT_MAX_FILE_SIZE_BYTES = 500_000;

const isClient = () => typeof window !== 'undefined';

function ImageInput({
  value,
  withPreview = true,
  maxFileSizeBytes = DEFAULT_MAX_FILE_SIZE_BYTES,
  ...props
}: ImageInputProps) {
  const [imageUrl, setImageUrl] = useState<string | File | null>(null);

  const largeFile =
    isClient() && value && value instanceof File && value.size >= maxFileSizeBytes;

  const isFileValue = isClient() && value instanceof File;
  const isString = typeof value == 'string';

  useEffect(() => {
    if (isFileValue) {
      setImageUrl(URL.createObjectURL(value as File));
    } else if (isString) {
      setImageUrl(value);
    }
  }, [value, isFileValue, isString]);

  if (props.disabled && !isFileValue) {
    return (
      <Avatar
        size="xl"
        src={imageUrl as string | undefined | null}
        {...props.disabledPlaceholderProps}
      />
    );
  }

  return (
    <Group>
      {withPreview && (
        <Paper radius="md" p="sm" withBorder>
          <Image
            w="5rem"
            h="5rem"
            fit="contain"
            radius="sm"
            src={imageUrl}
            {...props.previewProps}
          />
        </Paper>
      )}
      <FileInput
        styles={{ input: { fontSize: 'var(--mantine-font-size-xs)' } }}
        leftSection={
          <ActionIcon variant="light" size="xs" color="gray">
            <IconUpload />
          </ActionIcon>
        }
        placeholder="Upload"
        error={
          largeFile
            ? `File size must be under ${maxFileSizeBytes / 1000} KB`
            : undefined
        }
        onChange={(file) => {
          props.onChange?.(file);
          if (file) {
            setImageUrl(URL.createObjectURL(file));
          }
        }}
        {...props}
      />
    </Group>
  );
}

export default ImageInput;

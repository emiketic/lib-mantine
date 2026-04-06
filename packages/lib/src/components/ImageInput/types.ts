import { AvatarProps, FileInputProps, ImageProps } from '@mantine/core';

export interface ImageInputProps extends Omit<FileInputProps, 'value'> {
  value?: FileInputProps['value'] | string;
  withPreview?: boolean;
  previewProps?: ImageProps;
  disabledPlaceholderProps?: AvatarProps;
  /** Max file size in bytes before showing a validation warning. Defaults to 500 000 (500 KB). */
  maxFileSizeBytes?: number;
}

import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { BoxProps, MantineColor, StackProps, MantineSpacing, FileInputProps, ImageProps, AvatarProps, CenterProps, AlertProps, ScrollAreaProps, TitleProps, GroupProps, TextInputProps, SwitchProps } from '@mantine/core';
import { CountryCode } from 'libphonenumber-js';

declare function ClientOnly({ children, withLoader, ...delegated }: {
    children: ReactNode;
    withLoader?: boolean;
}): react_jsx_runtime.JSX.Element | null;

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

declare function ConfirmBar({ onConfirm, onCancel, disabled, loading, labelProps, color, withCancel, ...props }: ConfirmBarProps): react_jsx_runtime.JSX.Element;

interface ContentLoaderProps extends StackProps {
    numberOfBars?: number;
    numberOfBarGroups?: number;
    barHeight?: number;
    barSpacing?: number;
    barGroupSpacing?: MantineSpacing;
    visible?: boolean;
    withCircle?: boolean;
}

declare function ContentLoader({ numberOfBars, numberOfBarGroups, barHeight, barSpacing, barGroupSpacing, visible, withCircle, ...props }: ContentLoaderProps): react_jsx_runtime.JSX.Element | null;

interface ImageInputProps extends Omit<FileInputProps, 'value'> {
    value?: FileInputProps['value'] | string;
    withPreview?: boolean;
    previewProps?: ImageProps;
    disabledPlaceholderProps?: AvatarProps;
    /** Max file size in bytes before showing a validation warning. Defaults to 500 000 (500 KB). */
    maxFileSizeBytes?: number;
}

declare function ImageInput({ value, withPreview, maxFileSizeBytes, ...props }: ImageInputProps): react_jsx_runtime.JSX.Element;

interface LogoProps extends AvatarProps {
    /** Extract dominant color from the image and use it as a background. Defaults to true. */
    withColorPair?: boolean;
}

declare function Logo({ withColorPair, ...props }: LogoProps): react_jsx_runtime.JSX.Element;

interface NativePDFViewerProps {
    mediaUrl?: string;
    title?: string;
    zoomLevel?: number;
    withToolbar?: boolean;
    fallback?: ReactNode | (() => ReactNode);
}

declare function NativePDFViewer({ mediaUrl, title, zoomLevel, withToolbar, fallback, }: NativePDFViewerProps): react_jsx_runtime.JSX.Element | null;

interface NoDataProps extends CenterProps {
    title?: string;
    alertProps?: AlertProps;
    children?: ReactNode;
}

declare function NoData({ title, children, alertProps, ...props }: NoDataProps): react_jsx_runtime.JSX.Element;

interface PageContainerProps extends ScrollAreaProps {
    title?: string;
    titleProps?: TitleProps;
    header?: ReactNode;
    headerProps?: GroupProps;
    rightSection?: ReactNode;
    withContentScroll?: boolean;
    fullPage?: boolean;
    contentProps?: StackProps | BoxProps;
    outerContentProps?: StackProps;
}

declare function PageContainer({ children, title, titleProps, header, headerProps, rightSection, contentProps, outerContentProps, fullPage, withContentScroll, ...props }: PageContainerProps): react_jsx_runtime.JSX.Element;

interface PhoneInputProps extends Omit<TextInputProps, 'onChange'> {
    value?: string;
    defaultValue?: string;
    defaultCountryCode?: CountryCode;
    onChange?: (value: string) => void;
}

declare function PhoneInput({ value, defaultValue, defaultCountryCode, ...props }: PhoneInputProps): react_jsx_runtime.JSX.Element;

interface ThemeToggleProps extends SwitchProps {
}

declare function ThemeToggle(props: ThemeToggleProps): react_jsx_runtime.JSX.Element;

type CommonErrorCode = "APP_ERR_AUTH_INVALID_CREDENTIALS" | "APP_ERR_AUTH_LOCKED" | "APP_ERR_AUTH_REDIRECT" | "APP_ERR_SIGNUP_EMAIL_ALREADY_EXISTS" | "APP_ERR_USER_NOT_FOUND" | "APP_ERR_MEDIA_NOT_FOUND" | "APP_ERR_UNAUTHORIZED" | "APP_ERR_GENERIC" | "APP_ERR_UNKNOWN";
interface CommonError<T = CommonErrorCode> {
    code: T;
    message?: string;
    exception?: Error;
}

declare function useError<T extends string = never>({ result, error, }?: {
    result?: {
        i18nKey?: string;
        title?: string;
        message?: string;
    };
    error?: Error | CommonError<CommonErrorCode>;
}): {
    formatError: (err: Error | CommonError<T | CommonErrorCode> | null) => {
        title: string;
        message: string;
    };
    notifyError: (err: Error | CommonError<T | CommonErrorCode>, clr?: MantineColor | string) => void;
};

export { ClientOnly, type CommonError, type CommonErrorCode, ConfirmBar, type ConfirmBarProps, ContentLoader, type ContentLoaderProps, ImageInput, type ImageInputProps, Logo, type LogoProps, NativePDFViewer, type NativePDFViewerProps, NoData, type NoDataProps, PageContainer, type PageContainerProps, PhoneInput, type PhoneInputProps, ThemeToggle, type ThemeToggleProps, useError };

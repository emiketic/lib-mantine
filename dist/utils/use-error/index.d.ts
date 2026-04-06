import { MantineColor } from '@mantine/core';
import { CommonError, CommonErrorCode } from './types.js';

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

export { useError as default };

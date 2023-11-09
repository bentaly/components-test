import React, { DragEvent } from 'react';
import { BaseProps } from '../../components';
export interface FileInputProps extends BaseProps {
    classes?: {
        root?: string;
    };
    height?: number;
    width?: number;
    acceptableFileTypes?: string[];
    file?: File;
    /** What type(s) of files to accept, multiple is comma separated string */
    accept?: string;
    /** Main line when no file is uploaded, appears above "browse files" */
    title?: string;
    /** Replaces title when box is being hovered */
    hoverText?: string;
    /** When passed from parent component, replaces all text and icons with error and this message. */
    errorMessage?: string;
    /** Function called when mouse is hovered over the upload drop zone */
    onDragOver?: (event?: DragEvent<HTMLDivElement>) => void;
    /** Function called when file is dropped in the upload box */
    onDrop?: (event?: DragEvent<HTMLDivElement>) => void;
    /** Function called when mouse leaves the upload box */
    onDragLeave?: (event?: DragEvent<HTMLDivElement>) => void;
    /** REQUIRED: Function called after a file is dropped in the upload box */
    onUpload: (file?: File) => void;
    /** REQUIRED: Function called when close button is clicked */
    onRemoveFile: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export declare const FileInput: React.FC<FileInputProps>;

/// <reference types="react" />
export interface AddCommentProps {
    /** Prop to be called when send button is clicked */
    onSubmit: () => void;
    /** Disables the whole textarea, not just the button */
    disabled?: boolean;
    /** Height of the comment box by lines. Defaults to 3 */
    linesToShow?: number;
    /** The max value that can be used */
    maxLength?: number;
    /** Placeholder of component. Defaults to "Add a comment" */
    placeholder?: string;
    /** The value of the comment */
    value: string;
    /** The onChange to update value of comment */
    onChange: (value: string) => void;
    /** Disables the submit button if true */
    disableSubmit?: boolean;
}
export declare const AddComment: ({ disabled, onSubmit, maxLength, placeholder, linesToShow, value, onChange, disableSubmit, }: AddCommentProps) => JSX.Element;

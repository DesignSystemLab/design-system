export type InputElementEvent = React.ChangeEvent<HTMLInputElement> & React.MouseEvent<HTMLInputElement>;
export type TextAreaEvent = React.FormEvent<HTMLTextAreaElement>;
type CallInputHandler = (event: InputElementEvent) => void;
type CallTextareaHandler = (event: TextAreaEvent) => void;

//use for input element
export const callInputHandler = (defaultHandler: CallInputHandler | undefined, handler: CallInputHandler | undefined) => {
    return (event: InputElementEvent) => {
        defaultHandler?.(event);
        handler?.(event);
    };
};

//use for Textarea Element
export const callTextareaHandler = (defaultHandler: CallTextareaHandler | undefined, handler: CallTextareaHandler | undefined) => {
    return (event: TextAreaEvent) => {
        defaultHandler?.(event);
        handler?.(event);
    };
};

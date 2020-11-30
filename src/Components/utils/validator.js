

export const required = value => !value ? 'Reqiured' : undefined;

export const maxLengthCreator = (maxLength) => (value)=> {
 return (value && value.length > maxLength 
    ? `Must be ${maxLength} characters or less` 
    : undefined);
}; 
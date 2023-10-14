import React from 'react';

export default ({
    label,
    name,
    className,
    children,
    errors = [],
    ...props
}) => {
    return (
        <select
            id={name}
            name={name}
            {...props}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className}
        >
            {children}
        </select>
    );
};
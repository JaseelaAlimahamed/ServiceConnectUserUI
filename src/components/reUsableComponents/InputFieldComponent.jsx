import React from 'react';

const InputFieldComponent = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  inputWidth = '100%',
  inputHeight = '48px',
  icon,
}) => {
  return (
    <div className="flex flex-col">
      <div className="relative">
       
        {icon && (
          <img
            src={icon}
            alt={`${name} icon`}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-gray"
          />
        )}
        <input
          className={`px-4 py-2 mt-1 rounded-md border border-light-gray bg-medium-gray font-input text-dark-gray focus:outline-none focus:ring-2 focus:ring-secondary ${icon ? 'pl-10' : ''}`}
          style={{ width: inputWidth, height: inputHeight }}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      {touched && error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputFieldComponent;

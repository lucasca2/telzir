import { FC, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import {
  Overlay,
  Wrapper,
  Label,
  Placeholder,
  Value,
  WrapperIndicator,
  Dropdown,
  Option,
  WrapperContent,
} from './styles';

type TSelect = {
  label: string;
  placeholder?: string;
  options: any[];
  getOptionValue: (option: any) => any;
  getOptionLabel: (option: any) => string;
  getValueLabel: (value: any) => string;
  onChange: (newValue: any) => void;
  value: any;
};

export const Select: FC<TSelect> = ({
  placeholder,
  label,
  options,
  getOptionValue,
  getValueLabel,
  getOptionLabel,
  onChange,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSelect = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (option: any): void => {
    onChange(getOptionValue(option));
  };

  return (
    <>
      <Overlay
        onClick={handleToggleSelect}
        className={isOpen ? 'isOpen' : ''}
      />
      <Wrapper className={isOpen ? 'isOpen' : ''} onClick={handleToggleSelect}>
        <Label>{label}</Label>
        <WrapperContent>
          {value ? (
            <Value>{getValueLabel(value)}</Value>
          ) : (
            <Placeholder>{placeholder}</Placeholder>
          )}
          <WrapperIndicator>
            <MdKeyboardArrowDown />
          </WrapperIndicator>
        </WrapperContent>

        <Dropdown className={isOpen ? 'isOpen' : ''}>
          {options.map((option) => (
            <Option
              key={getOptionLabel(option)}
              onClick={() => handleChange(option)}
            >
              {getOptionLabel(option)}
            </Option>
          ))}
        </Dropdown>
      </Wrapper>
    </>
  );
};

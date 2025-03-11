import React, { useEffect, useState, useRef } from 'react';

export interface SelectProps {
    label: string;
    options: string[];
    id?: string;
    value?: string[];
    onSelect?: (options: string[]) => void;
}

const MultiSelect = ({
    label = '',
    options,
    value = [],
    onSelect,
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>(value);
    const [search, setSearch] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleOptionClick = (option: string) => {
        setSelectedOptions((prevOptions) => {
            const isSelected = prevOptions.includes(option);
            const updatedOptions = isSelected
                ? prevOptions.filter((selected) => selected !== option)
                : [...prevOptions, option];

            if (onSelect) {
                onSelect(updatedOptions);
            }
            return updatedOptions;
        });
    };

    const handleRemoveOption = (option: string) => {
        setSelectedOptions((prevOptions) => {
            const updatedOptions = prevOptions.filter((selected) => selected !== option);
            if (onSelect) {
                onSelect(updatedOptions);
            }
            return updatedOptions;
        });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && search.trim() !== '') {
            handleOptionClick(search.trim());
            setSearch('');
        }
    };

    useEffect(() => {
        if (JSON.stringify(selectedOptions) !== JSON.stringify(value)) {
            setSelectedOptions(value);
        }
    }, [value, selectedOptions]);

    const filteredOptions = options.filter(option => option.toLowerCase().includes(search.toLowerCase()));
    const showNewValue = search.trim() !== '' && !options.includes(search.trim());

    useEffect(() => {
        setIsOpen(search.trim() !== '' && (filteredOptions.length > 0 || showNewValue));
    }, [search, filteredOptions, showNewValue]);

    const handleContainerClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className='bg-red w-full max-w-[350px]'>
            <label className='text-sm' htmlFor={label}>{label}</label>
            <div
                ref={containerRef}
                className="relative min-h-3 cursor-pointer p-1 flex border border-gray-300 bg-white rounded-md focus-within:border-[#0F70A9] focus-within:border-2"
                onClick={handleContainerClick}
            >
                <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto">
                    {selectedOptions.map((option) => (
                        <div key={option} className="flex items-center bg-[#E0E6E9] text-[#4A4F53] px-2 py-1 rounded-md text-xs">
                            {option}
                            <button className="ml-2 cursor-pointer text-[#7D818D] rounded-full" onClick={() => handleRemoveOption(option)}>×</button>
                        </div>
                    ))}
                    <input
                        ref={inputRef}
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="p-1 text-sm border-transparent focus:outline-none size-auto"
                    />
                </div>



                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        <ul className="max-h-32 overflow-y-auto">
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((option) => (
                                    <li
                                        key={option}
                                        onClick={() => handleOptionClick(option)}
                                        className="p-2 text-sm hover:bg-gray-100 cursor-pointer"
                                    >
                                        {option}
                                    </li>
                                ))
                            ) : showNewValue ? (
                                <li
                                    className="p-2 text-sm hover:bg-gray-100 cursor-pointer flex justify-between"
                                    onClick={() => {
                                        handleOptionClick(search.trim());
                                        setSearch('');
                                    }}
                                >
                                    {search.trim()} <span className="text-gray-500">(new value)</span>
                                </li>
                            ) : (
                                <li className="p-2 text-sm text-gray-500">No hay opciones disponibles</li>
                            )}
                        </ul>
                    </div>
                )}

            </div>
        </div>
    );
};

export default MultiSelect;
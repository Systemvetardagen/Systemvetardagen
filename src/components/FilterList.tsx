import React from 'react';

interface FilterItem {
    id: string;
    name: string;
    type?: 'Bachelor' | 'Master';
}

interface FilterListProps<T extends FilterItem> {
    title: string;
    items: T[];
    onToggle: (item: T) => void;
}

const FilterList = <T extends FilterItem>({
    title,
    items,
    onToggle,
}: FilterListProps<T>) => {
    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">{title}</h3>
            <div className="space-y-2">
                {items.map((item) => (
                    <label
                        key={item.id}
                        className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                    >
                        <input
                            type="checkbox"
                            onChange={() => onToggle(item)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">{item.name}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FilterList;
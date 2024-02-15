import { useState } from 'react';
import { IFilters } from '../interfaces';

export const useFilters = (
  initialFilters: IFilters
): [IFilters, (key: string, value: string | number | null) => void] => {
  const [filters, setFilters] = useState<IFilters>(initialFilters);

  const changeFilters = (key: string, value: string | number | null) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return [filters, changeFilters];
};

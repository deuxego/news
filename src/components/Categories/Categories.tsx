import { ForwardedRef, forwardRef } from 'react';
import style from './Categories.module.css';
import { CategoriesType } from '../../interfaces';

interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}

const Categories = forwardRef(
  ({ categories, selectedCategory, setSelectedCategory }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={style.categories}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? style.active : style.category}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? style.active : style.category}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
);

Categories.displayName = 'Categories';

export default Categories;

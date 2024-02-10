import { forwardRef } from 'react';
import style from './Categories.module.css';

const Categories = forwardRef(({ categories, selectedCategory, setSelectedCategory }, ref) => {
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
});

Categories.displayName = 'Categories';

export default Categories;

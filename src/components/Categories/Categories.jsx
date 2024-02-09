import style from './Categories.module.css';

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className={style.categories}>
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category)}
          className={selectedCategory === category ? style.active :style.category}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
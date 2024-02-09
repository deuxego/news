import style from './Categories.module.css';

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className={style.categories}>
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
};

export default Categories;

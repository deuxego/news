import { ReactElement, cloneElement } from 'react';
import { useRef } from 'react';
import style from './Slider.module.css';

interface Props {
  children: ReactElement;
  step?: number;
}

const Slider = ({ children, step = 150 }: Props) => {
  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= step;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += step;
    }
  };

  return (
    <div className={style.slider}>
      <button onClick={scrollLeft} className={style.arrow}>
        {'<'}
      </button>

      {cloneElement(children, { ref: sliderRef })}

      <button onClick={scrollRight} className={style.arrow}>
        {'>'}
      </button>
    </div>
  );
};

export default Slider;

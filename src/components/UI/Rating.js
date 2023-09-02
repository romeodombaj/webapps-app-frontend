import styles from "./Rating.module.css";
import { useEffect, useState } from "react";

//images
import star from "../../assets/star_symbol.png";

const stars = [
  {
    img: star,
    active: false,
  },
  {
    img: star,
    active: false,
  },
  {
    img: star,
    active: false,
  },
  {
    img: star,
    active: false,
  },
  {
    img: star,
    active: false,
  },
];

const Rating = (props) => {
  const [starList, setStarList] = useState(stars);
  const [lockIndex, setLockIndex] = useState(-1);

  const starActivation = (stat, start, end) => {
    let tempList = starList;

    for (let i = start; i <= end; i++) {
      tempList[i].active = stat;
    }

    setStarList([...tempList]);
  };

  const starHover = (e) => {
    starActivation(true, 0, e.currentTarget.getAttribute("value"));
  };

  const endHover = (e) => {
    let startPoint = 0;

    if (lockIndex > -1) {
      startPoint = lockIndex + 1;
    }

    starActivation(false, startPoint, 4);
  };

  const lockStars = (e) => {
    const index = e.currentTarget.getAttribute("value");
    setLockIndex(parseInt(index));
  };

  useEffect(() => {
    if (props.value) {
      setLockIndex(props.value);
      starActivation(false, 0, 4);
      starActivation(true, 0, props.value);
    }
  }, [props.value]);

  return (
    <div className={styles.wrapper}>
      {starList.map((item, i) => {
        if (props.static === true) {
          return (
            <img
              key={i}
              className={`${styles.star} ${
                styles[`${item.active ? `isActive` : null}`]
              }`}
              src={item.img}
            />
          );
        } else {
          return (
            <img
              onClick={lockStars}
              onMouseEnter={starHover}
              onMouseLeave={endHover}
              value={i}
              key={i}
              className={`${styles.star} ${
                styles[`${item.active ? `isActive` : null}`]
              } ${!props.static && styles.clickable}`}
              src={item.img}
            />
          );
        }
      })}
    </div>
  );
};

export default Rating;

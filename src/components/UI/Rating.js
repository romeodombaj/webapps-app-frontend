import styles from "./Rating.module.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import UserContext from "../store/user-context";

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
  const userCtx = useContext(UserContext);

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
    patchRating(parseInt(index));
  };

  const patchRating = (rating) => {
    const id = props.data._id;
    const userId = userCtx.userData._id;
    let ratings = props.data.rating;

    if (ratings.some((el) => el.userId === userId)) {
      const index = ratings.findIndex((el) => el.userId === userId);
      ratings[index].rating = rating;
    } else {
      ratings.push({
        userId,
        rating,
      });
    }

    const data = {
      name: props.data.name,
      description: props.data.description,
      category: props.data.category,
      user: props.data.user,
      image: props.data.image,
      rating: ratings,
    };

    fetch(`http://localhost:5000/recipes/patch/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
      }),
    });
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

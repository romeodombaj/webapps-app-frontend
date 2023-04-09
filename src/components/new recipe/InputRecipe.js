import styles from "./InputRecipe.module.css";

const InputRecipe = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles[`title-input-wrapper`]}>
        <div className={styles[`horizontal-label`]}>title</div>
        <input />
      </div>
      <div className={styles[`description-input-wrapper`]}>
        <div className={styles[`vertical-label`]}>description</div>
        <textarea />
      </div>
    </div>
  );
};

export default InputRecipe;

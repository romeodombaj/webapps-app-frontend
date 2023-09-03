import { Fragment, useEffect } from "react";
import styles from "./Error.module.css";

const Error = (props) => {
  useEffect(() => {
    console.log(props.error);
  }, [props.error]);

  return (
    <Fragment>
      {props.error != "" && <div className={styles.error}>{props.error}</div>}
    </Fragment>
  );
};

export default Error;

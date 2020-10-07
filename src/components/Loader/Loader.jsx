import React from "react";
import classes from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={classes.loadingioSpinner}>
      <div className={classes.spinner}>
        <div>
          <div/>
        </div>
        <div>
          <div/>
        </div>
        <div>
          <div/>
        </div>
        <div>
          <div/>
        </div>
        <div>
          <div/>
        </div>
        <div>
          <div/>
        </div>
        <div>
          <div/>
        </div>
        <div>
          <div/>
        </div>
      </div>
    </div>
  );
}

export default Loader;

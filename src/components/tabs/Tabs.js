import React from 'react';

import classes from './tabs.module.scss';

function Tabs(props) {
  const classCheap = props.cheap ? `${classes.tab} ${classes.tab__active}` : classes.tab;
  const classFast = props.fast ? `${classes.tab} ${classes.tab__active}` : classes.tab;
  const classOptimal = props.optimal ? `${classes.tab} ${classes.tab__active}` : classes.tab;
  return (
    <div className={classes.tabs}>
      <div onClick={props.handleCheapClick} className={classCheap}>
        Самый дешевый
      </div>
      <div onClick={props.handleFastClick} className={classFast}>
        Самый быстрый
      </div>
      <div onClick={props.handleOptimalClick} className={classOptimal}>
        Оптимальный
      </div>
    </div>
  );
}

export default Tabs;

import React from 'react';

function Tabs(props) {
  const classCheap = props.cheap ? 'tab tab__active' : 'tab';
  const classFast = props.fast ? 'tab tab__active' : 'tab';
  const classOptimal = props.optimal ? 'tab tab__active' : 'tab';
  return (
    <div className="tabs">
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

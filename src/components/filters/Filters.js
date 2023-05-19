import React, { useState, useEffect } from 'react';

import classes from '../app/app.module.scss';

const plainOptions = [
  { name: 'Без пересадок' },
  { name: '1 пересадка' },
  { name: '2 пересадки' },
  { name: '3 пересадки' },
];
function Filters(props) {
  const [checkedList, setCheckedList] = useState([]);
  useEffect(() => {
    setCheckedList(plainOptions);
  }, []);
  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'Все') {
      let tempCheck = checkedList.map((check) => {
        return { ...check, isChecked: checked };
      });
      setCheckedList(tempCheck);
    } else {
      let tempCheck = checkedList.map((check) => (check.name === name ? { ...check, isChecked: checked } : check));
      setCheckedList(tempCheck);
    }
  };
  return (
    <form onClick={props.checkedChange} className={classes.filters}>
      <div className={classes.filters__title}>Количество пересадок</div>
      <label className={classes.filters__label}>
        <input
          name="Все"
          type="checkbox"
          className={classes.checkbox}
          onChange={handleChange}
          checked={!checkedList.filter((check) => (check.isChecked ? !check.isChecked : true)).length}
        />
        <span className={classes.checkbox__custom}></span>
        Все
      </label>
      {checkedList.map((check, i) => (
        <label key={i} className={classes.filters__label}>
          <input
            checked={check.isChecked ? check.isChecked : false}
            type="checkbox"
            className={classes.checkbox}
            onChange={handleChange}
            name={check.name}
          />
          <span className={classes.checkbox__custom}></span>
          {check.name}
        </label>
      ))}
    </form>
  );
}
export default Filters;

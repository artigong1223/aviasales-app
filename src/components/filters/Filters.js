import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { withTicketStoreService } from '../hoc';
import { checkedClickAll, checkedClickZero, checkedClickOne, checkedClickTwo, checkedClickThree } from '../../actions';

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
    if (name === 'all') {
      let tempCheck = checkedList.map((check) => {
        return { ...check, isChecked: checked };
      });
      setCheckedList(tempCheck);
    } else {
      let tempCheck = checkedList.map((check) => (check.name === name ? { ...check, isChecked: checked } : check));
      setCheckedList(tempCheck);
    }
  };
  const checkedChange = (e) => {
    e.target.name === 'all' ? props.checkedClickAll(true) : null;
    e.target.name === 'Без пересадок' ? props.checkedClickZero(true) : null;
    e.target.name === '1 пересадка' ? props.checkedClickOne(true) : null;
    e.target.name === '2 пересадки' ? props.checkedClickTwo(true) : null;
    e.target.name === '3 пересадки' ? props.checkedClickThree(true) : null;
  };
  return (
    <form onClick={checkedChange} className="filters">
      <div className="filters__title">Количество пересадок</div>
      <label className="filters__label">
        <input
          name="all"
          type="checkbox"
          className="checkbox"
          onChange={handleChange}
          checked={!checkedList.filter((check) => (check.isChecked ? !check.isChecked : true)).length}
        />
        <span className="checkbox__custom"></span>
        Все
      </label>
      {checkedList.map((check, i) => (
        <label key={i} className="filters__label">
          <input
            checked={check.isChecked ? check.isChecked : false}
            type="checkbox"
            className="checkbox"
            onChange={handleChange}
            name={check.name}
          />
          <span className="checkbox__custom"></span>
          {check.name}
        </label>
      ))}
    </form>
  );
}
const mapStateToProps = ({ checkAll, checkZero, checkOne, checkTwo, checkThree }) => {
  return { checkAll, checkZero, checkOne, checkTwo, checkThree };
};
const mapDispatchToProps = (dispatch) => {
  return {
    checkedClickAll: () => {
      dispatch(checkedClickAll());
    },
    checkedClickZero: () => {
      dispatch(checkedClickZero());
    },
    checkedClickOne: () => {
      dispatch(checkedClickOne());
    },
    checkedClickTwo: () => {
      dispatch(checkedClickTwo());
    },
    checkedClickThree: () => {
      dispatch(checkedClickThree());
    },
  };
};
export default withTicketStoreService()(connect(mapStateToProps, mapDispatchToProps)(Filters));

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from '../app/app.module.scss';
import Ticket from '../ticket/ticket';
import { withTicketStoreService } from '../hoc';
import {
  fetchTicket,
  cheapClick,
  fastClick,
  optimalClick,
  checkedClickAll,
  checkedClickOne,
  checkedClickZero,
  checkedClickTwo,
  checkedClickThree,
  loading,
  more,
} from '../../redux/actions';
import Tabs from '../tabs/Tabs';
import Loading from '../loading/Loading';
import Filters from '../filters/Filters';

function TicketList(props) {
  let ticketsDef = [...props.tickets];
  const sort = (arr) => {
    props.cheap ? arr.sort((a, b) => a.price - b.price) : null;
    props.fast
      ? arr.sort(
          (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
        )
      : null;
    props.optimal
      ? arr
          .sort((a, b) => a.price - b.price)
          .sort(
            (a, b) =>
              a.segments[0].stops.length +
              a.segments[1].stops.length -
              (b.segments[0].stops.length + b.segments[1].stops.length)
          )
      : null;
    return arr;
  };
  function filter(a) {
    let filtersDef = [];
    props.checkZero
      ? filtersDef.unshift(...a.filter((g) => g.segments[0].stops.length === 0 && g.segments[1].stops.length === 0))
      : (filtersDef = filtersDef.filter(
          (g) => !a.filter((g) => g.segments[0].stops.length === 0 && g.segments[1].stops.length === 0).includes(g)
        ));
    props.checkOne
      ? filtersDef.unshift(...a.filter((g) => g.segments[0].stops.length === 1 && g.segments[1].stops.length === 1))
      : (filtersDef = filtersDef.filter(
          (g) => !a.filter((g) => g.segments[0].stops.length === 1 && g.segments[1].stops.length === 1).includes(g)
        ));
    props.checkTwo
      ? filtersDef.unshift(...a.filter((g) => g.segments[0].stops.length === 2 && g.segments[1].stops.length === 2))
      : (filtersDef = filtersDef.filter(
          (g) => !a.filter((g) => g.segments[0].stops.length === 2 && g.segments[1].stops.length === 2).includes(g)
        ));
    props.checkThree
      ? filtersDef.unshift(...a.filter((g) => g.segments[0].stops.length === 3 && g.segments[1].stops.length === 3))
      : (filtersDef = filtersDef.filter(
          (g) => !a.filter((g) => g.segments[0].stops.length === 3 && g.segments[1].stops.length === 3).includes(g)
        ));
    return filtersDef;
  }
  useEffect(() => {
    props.fetchTicket();
  }, []);
  const handleCheapClick = () => {
    props.cheapClick();
  };
  const handleFastClick = () => {
    props.fastClick();
  };
  const handleOptimalClick = () => {
    props.optimalClick();
  };
  const checkedChange = (e) => {
    e.target.name === 'Все' ? props.checkedClickAll() : null;
    e.target.name === 'Без пересадок' ? props.checkedClickZero() : null;
    e.target.name === '1 пересадка' ? props.checkedClickOne() : null;
    e.target.name === '2 пересадки' ? props.checkedClickTwo() : null;
    e.target.name === '3 пересадки' ? props.checkedClickThree() : null;
  };
  return (
    <div className={classes.content}>
      <Filters checkedChange={checkedChange} />
      <div className={classes.groop}>
        <Tabs
          cheap={props.cheap}
          fast={props.fast}
          optimal={props.optimal}
          handleCheapClick={handleCheapClick}
          handleFastClick={handleFastClick}
          handleOptimalClick={handleOptimalClick}
        />
        {props.load ? (
          <Loading />
        ) : sort(filter(ticketsDef)).length === 0 ? (
          <div>
            <div className={classes.filter__title}>Рейсов, подходящих под заданные фильтры, не найдено</div>
          </div>
        ) : (
          <div>
            {sort(filter(ticketsDef))
              .map((g) => {
                return (
                  <Ticket
                    key={new Date().getTime() + g.price}
                    carrier={g.carrier}
                    price={g.price}
                    there={g.segments[0]}
                    back={g.segments[1]}
                  />
                );
              })
              .slice(0, props.moreCount)}
            <button className={classes.more} onClick={props.more}>
              Показать ещё 5 билетов!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = ({
  ticketsList: { tickets, moreCount, load },
  filterList: { cheap, fast, optimal, checkAll, checkZero, checkOne, checkTwo, checkThree },
}) => {
  return { tickets, cheap, fast, optimal, load, moreCount, checkAll, checkZero, checkOne, checkTwo, checkThree };
};
const mapDispatchToProps = (dispatch, { ticketStoreService }) => {
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
    cheapClick: () => {
      dispatch(cheapClick());
    },
    fastClick: () => {
      dispatch(fastClick());
    },
    optimalClick: () => {
      dispatch(optimalClick());
    },
    loading: () => {
      dispatch(loading());
    },
    more: () => {
      dispatch(more());
    },
    fetchTicket: fetchTicket(ticketStoreService, dispatch),
  };
};

export default withTicketStoreService()(connect(mapStateToProps, mapDispatchToProps)(TicketList));

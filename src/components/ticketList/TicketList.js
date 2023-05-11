import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Ticket from '../ticket/ticket';
import { withTicketStoreService } from '../hoc';
import { fetchTicket, cheapClick, fastClick, optimalClick, loading, error } from '../../actions';
import Tabs from '../tabs/Tabs';
import Loading from '../loading/Loading';
import ErrorIndicator from '../error/ErrorIndicator';

function TicketList(props) {
  useEffect(() => {
    props.fetchTicket();
  }, []);
  const handleCheapClick = () => {
    props.cheapClick(true);
  };
  const handleFastClick = () => {
    props.fastClick(true);
  };
  const handleOptimalClick = () => {
    props.optimalClick(true);
  };
  return (
    <div className="content">
      <Tabs
        cheap={props.cheap}
        fast={props.fast}
        optimal={props.optimal}
        handleCheapClick={handleCheapClick}
        handleFastClick={handleFastClick}
        handleOptimalClick={handleOptimalClick}
      />
      {props.err ? (
        <ErrorIndicator />
      ) : props.load ? (
        <Loading />
      ) : props.tickets.length === 0 ? (
        <div>
          <div className="filter__title">Рейсов, подходящих под заданные фильтры, не найдено</div>
        </div>
      ) : (
        props.tickets.map((g, i) => {
          return <Ticket key={i} carrier={g.carrier} price={g.price} there={g.segments[0]} back={g.segments[1]} />;
        })
      )}
    </div>
  );
}
const mapStateToProps = ({ tickets, cheap, fast, optimal, load, err }) => {
  return { tickets, cheap, fast, optimal, load, err };
};
const mapDispatchToProps = (dispatch, { ticketStoreService }) => {
  return {
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
    error: () => {
      dispatch(error());
    },
    fetchTicket: fetchTicket(ticketStoreService, dispatch),
  };
};

export default withTicketStoreService()(connect(mapStateToProps, mapDispatchToProps)(TicketList));

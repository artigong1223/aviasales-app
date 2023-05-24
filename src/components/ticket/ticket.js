import React from 'react';
import { format, add } from 'date-fns';

import classes from './tickets.module.scss';

function Ticket(props) {
  const convertDateToTime = (date) => {
    return format(new Date(date), 'HH:mm');
  };
  const getArrivalTime = (startTime, duration) => {
    const result = add(new Date(startTime), {
      minutes: duration,
    });
    return result;
  };
  return (
    <div className={classes.tickets}>
      <div className={classes.tickets__title}>
        <div className={classes.tickets__price}>
          {props.price.toString().length === 6
            ? `${props.price.toString().slice(0, 3)} ${props.price.toString().slice(2, 6)} Р`
            : `${props.price.toString().slice(0, 2)} ${props.price.toString().slice(2, 5)} Р`}
        </div>
        <img
          src={`https://pics.avs.io/99/36/${props.carrier}.png`}
          alt="Company logo"
          className={classes.tickets__log}
        />
      </div>
      <div className={classes.tickets__path}>
        <div className={classes.city}>
          <div className={classes.city__title}>{props.there.origin + ' – ' + props.there.destination}</div>
          <div className={classes.city__interval}>
            {convertDateToTime(props.there.date.slice(0, -1)) +
              ' – ' +
              convertDateToTime(getArrivalTime(props.there.date.slice(0, -1), props.there.duration))}
          </div>
        </div>
        <div className={classes.time}>
          <div className={classes.time__title}>В пути</div>
          <div className={classes.time__interval}>
            {Math.trunc(props.there.duration / 60)}ч {props.there.duration % 60}м
          </div>
        </div>
        <div className={classes.transfer}>
          <div className={classes.transfer__title}>
            {props.there.stops.length === 1
              ? props.there.stops.length + ' пересадка'
              : props.there.stops.length > 1
              ? props.there.stops.length + ' пересадки'
              : 'Нет пересадок'}
          </div>
          <div className={classes.transfer__interval}>{props.there.stops.join(', ')}</div>
        </div>
      </div>
      <div className={classes.tickets__path}>
        <div className={classes.city}>
          <div className={classes.city__title}>{props.back.origin + ' – ' + props.back.destination}</div>
          <div className={classes.city__interval}>
            {convertDateToTime(props.back.date.slice(0, -1)) +
              ' – ' +
              convertDateToTime(getArrivalTime(props.back.date.slice(0, -1), props.back.duration))}
          </div>
        </div>
        <div className={classes.time}>
          <div className={classes.time__title}>В пути</div>
          <div className={classes.time__interval}>
            {Math.trunc(props.back.duration / 60)}ч {props.back.duration % 60}м
          </div>
        </div>
        <div className={classes.transfer}>
          <div className={classes.transfer__title}>
            {props.back.stops.length === 1
              ? props.back.stops.length + ' пересадка'
              : props.back.stops.length > 1
              ? props.back.stops.length + ' пересадки'
              : 'Нет пересадок'}
          </div>
          <div className={classes.transfer__interval}>{props.back.stops.join(', ')}</div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;

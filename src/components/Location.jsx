import { Col, Container } from 'react-bootstrap';
import React, { useMemo } from 'react';
import WeatherIcon from './WeatherIcon';

const degreeSign = '℉';

export const Location = (props) => {
  const { item } = props;

  const {
    id,
    kind,
    temperature,
    outfit,
    activity,
    synopsis
  } = item;

  const cityTemperature = `${temperature}${degreeSign}` || '';

  const getCityTimezoneByOffset = (offsetInSecFromUTC) => {
    const offsetInMsFromUTC = offsetInSecFromUTC * 1000;
    const date = new Date(Date.now() + offsetInMsFromUTC);
    const dateOptions = { weekday: 'long', month: 'short', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', timeZoneName: 'long', timeZone: 'UTC' };
    return {
      itemTimezone: date.toLocaleString('en', dateOptions),
      itemDate: date.toLocaleString('en', timeOptions),
    };
  }

  const { itemTimezone, itemDate } = useMemo(() => {
    return getCityTimezoneByOffset(0);
  }, []);

  const recommend_activity_outfit = (activity, outfit) => {
    if (activity && outfit) {
      return (
        <div className="recommendation">
          <span>
            Activity:
          </span>
          <br />
          <span className="text-light">
            {activity}
          </span>
          <br />
          <span>
            Outfit Recommendation:
          </span>
          <br />
          <span className="text-light">
            {outfit}
          </span>
        </div>
      );
    }
    return (
      <>
        <br />
        <span className="recommendation text-light">No recommendation found.</span>
      </>
    );

  }


  return (
    <>
      <Col className="details">
        <h3 className="temperature">{cityTemperature}</h3>
        <div>
          <WeatherIcon condition={kind} className="temperature">{kind}</WeatherIcon>
          <h4 className="name">{id}</h4>
          {itemTimezone && itemDate && (
            <p className="timezone">{itemTimezone} - {itemDate}</p>
          )}
        </div>
      </Col>
      <Col className="summary">
        <Container>
          <h4 className="weather-kind">
            {kind}
          </h4>

          {recommend_activity_outfit(activity, outfit)}

          <span className="synopsis">
            {synopsis}
          </span>
        </Container>
      </Col >
    </>
  )
}
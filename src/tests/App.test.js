import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CityItem from '../components/CityItem';
import WeatherIcon from '../components/WeatherIcon';
import { Location } from '../components/Location';

test('renders WeatherIcon ', () => {
    render(<WeatherIcon condition="hot" />);
});

test('renders CityItem component', () => {
    render(<CityItem />);
});

const item = {
    id: "Karachi",
    kind: "hot",
    temperature: 95,
    outfit: "Light cloths",
    activity: "Don't go out",
    synopsis: "It's hot today so don't go out."
}
test('renders Location component with data', () => {
    render(<Location item={item} />);
});

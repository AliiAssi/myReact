import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';

function MyWeatherIcon(props) {
  const {icon} = props;
  return (
    <div className="flex items-center justify-center">
      <FontAwesomeIcon icon={icon} size="2x" />
    </div>
  )
}

export default MyWeatherIcon
import React from 'react';
import Globe from 'worldwind-react-globe'

const layers = [
    'coordinates',
    "bing-aerial-labels",
    'view-controls',
    'stars',
    'atmosphere-day-night'
  ];
class Map extends React.Component {
    
    render() {
      return (
        <Globe
            layers={layers}
        />
      )
    }
  }

export default Map;
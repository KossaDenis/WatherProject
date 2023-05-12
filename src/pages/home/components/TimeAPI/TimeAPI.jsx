import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const TimeAPI = ({ city, setTime, time, lon, lat }) => {
  const API_KeyTime = 'UV0FWPJBT019';
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchTimeData = async () => {
      const response = await axios.get(`http://api.timezonedb.com/v2.1/get-time-zone?key=${API_KeyTime}&format=json&by=position&lat=${lat}&lng=${lon}`);
      setTime(response.data);
      setLoaded(true);
    };

    fetchTimeData();
  }, [city, setTime, lat, lon, API_KeyTime]);

  useEffect(() => {
    if (loaded) {
      intervalRef.current = setInterval(() => {
        const fetchTimeData = async () => {
          const response = await axios.get(`http://api.timezonedb.com/v2.1/get-time-zone?key=${API_KeyTime}&format=json&by=position&lat=${lat}&lng=${lon}`);
          setTime(response.data);
        };
        fetchTimeData();
      }, 60000);
    }

    return () => clearInterval(intervalRef.current);
  }, [loaded, setTime, lat, lon, API_KeyTime]);

  return null;
};

export default TimeAPI;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RealTimeData = () => {
  const [data, setData] = useState({});
  const THINGSBOARD_HOST_NAME = '18.140.254.213'; // ganti dengan hostname ThingsBoard Anda
  const ACCESS_TOKEN = 'nyzA0KZowFlKHquflBxr'; // ganti dengan access token
  const clientKeys = 'humidity,temperature,wind_speed'; // sesuaikan dengan kunci client
  // const sharedKeys = 'shared1,shared2'; // sesuaikan dengan kunci shared

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://${THINGSBOARD_HOST_NAME}/api/v1/${ACCESS_TOKEN}/attributes?clientKeys=${clientKeys}`
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000); // Refresh data setiap 5 detik
    return () => clearInterval(interval);
  }, [THINGSBOARD_HOST_NAME, ACCESS_TOKEN, clientKeys]);

  return (
    <div>
      <h1>Real-time IoT Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default RealTimeData;

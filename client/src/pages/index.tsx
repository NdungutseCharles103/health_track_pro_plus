import { useEffect, useState } from "react";
import { SensorData } from "../types/sensor.type";
import { api } from "../utils/fetch";
import { ApiResponse } from "../types";

function IndexPage() {
  const [sensorData, setSensorData] = useState<SensorData[]>([]);

  const getSensorData = async () => {
    try {
      const res = await api.get<ApiResponse<SensorData[]>>("/sensor-data");
      const data = res.data.data;
      setSensorData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSensorData();
  }, []);

  return (
    <div>
      IndexPage
      {sensorData.map((sensor) => {
        return (
          <div key={sensor.id}>
            <div>{sensor.id}</div>
            <div>{sensor.heartRate}</div>
            <div>{sensor.createdAt}</div>
          </div>
        );
      })}
    </div>
  );
}

export default IndexPage;

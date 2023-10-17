import { useEffect, useState } from 'react';
import { SensorData } from '../types/sensor.type';
import { api } from '../utils/fetch';
import { ApiResponse } from '../types';
import MainLayout from '@/layouts/MainLayout';
import { Card, Title, Text } from '@tremor/react';
import { Patient } from '@/types/rfid.type';

function IndexPage() {
   const [sensorData, setSensorData] = useState<SensorData[]>([]);
   const [patient, setRfidData] = useState<Patient[]>([]);

   const getSensorData = async () => {
      try {
         const res = await api.get<ApiResponse<SensorData[]>>('/sensor-data');
         const data = res.data.data;
         setSensorData(data);
      } catch (error) {
         console.log(error);
      }
   };

   const getPatient = async () => {
      try {
         const res = await api.get<ApiResponse<SensorData[]>>('/sensor-data');
         const data = res.data.data;
         setSensorData(data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      getSensorData();
      getPatient();
   }, []);

   return (
      <MainLayout>
         {/* {sensorData.map((sensor) => {
        return (
          <div key={sensor.id}>
            <div>{sensor.id}</div>
            <div>{sensor.heartRate}</div>
            <div>{sensor.createdAt}</div>
          </div>
        );
      })} */}
         <main className="p-3">
            <Title>Your dashboard</Title>
            <Text>Measure your health, manage your account, and more. This is your dashboard, where you can</Text>
            <div className="mt-6">
               <div className="mt-6 w-full flex flex-col gap-y-2">
                  <Card>
                     <div className="h-80" />
                  </Card>
               </div>
            </div>
         </main>
      </MainLayout>
   );
}

export default IndexPage;

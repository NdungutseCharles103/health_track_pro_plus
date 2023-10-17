import MainLayout from '@/layouts/MainLayout';
import { Patient } from '@/types/patient.type';
import { Text, Title } from '@tremor/react';
import { useEffect, useState } from 'react';
import { ApiResponse, ChartDataByMonth } from '../types';
import { SensorData } from '../types/sensor.type';
import { api } from '../utils/fetch';
import Chart from '@/components/dashboard/Chart';

function IndexPage() {
   const [sensorData, setSensorData] = useState<SensorData[]>([]);
   const [patientData, setPatientData] = useState<ChartDataByMonth<Patient>[]>([]);

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
         const res = await api.get<ApiResponse<ChartDataByMonth<Patient>[]>>('/patient/chart/month');
         const data = res.data.data;
         setPatientData(data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      getSensorData();
      getPatient();
   }, []);
   console.log('sensorData', sensorData);

   return (
      <MainLayout>
         <main className="p-3">
            <Title>Your dashboard</Title>
            <Text>Measure your health, manage your account, and more. This is your dashboard, where you can</Text>
            <div className="mt-6">
               <div className="mt-6 w-full flex flex-col gap-y-2">
                  <Chart data={patientData} title="Patients registered over months" />
               </div>
            </div>
         </main>
      </MainLayout>
   );
}

export default IndexPage;

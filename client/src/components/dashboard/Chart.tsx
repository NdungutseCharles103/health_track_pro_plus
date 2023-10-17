import { ChartDataByMonth } from '@/types';
import { Patient } from '@/types/patient.type';
import { AreaChart, Card, Title } from '@tremor/react';
import { FC } from 'react';

interface ChartProps {
   data: ChartDataByMonth<Patient>[];
   title: string;
}

// const valueFormatter = (number: number) => `$ ${new Intl.NumberFormat('us').format(number).toString()}`;

const Chart: FC<ChartProps> = ({ data, title }) => {
   const chartData = data.map((item) => ({
      month: item.month,
      patients: item.data.length,
   }));
   return (
      <Card>
         <Title>{title}</Title>
         <AreaChart
            className="h-[60vh] mt-4"
            data={chartData}
            index="month"
            categories={['patients']}
            colors={['indigo', 'cyan']}
            // valueFormatter={valueFormatter}
         />
      </Card>
   );
};

export default Chart;

import dayjs from 'dayjs';
import { Op } from 'sequelize';
import { RFIDData } from '../../models/RFIDData';
import { ApiResponse } from '../../utils/ApiResponse';
import { Request, Response } from 'express';
import localeData from 'dayjs/plugin/localeData';
import { range } from '../../utils/funcs';
dayjs.extend(localeData);

dayjs().localeData();

// get rfid chart data for last 24 hours (1 day) with hour intervals
export const getRFIDChartData = async (req: Request, res: Response) => {
   try {
      const rfidData = await RFIDData.findAll({
         where: {
            createdAt: {
               [Op.gte]: dayjs().subtract(1, 'day').toDate(),
            },
         },
      });
      const chartData = rfidData.map(({ dataValues }) => {
         return {
            hour: dayjs(dataValues.createdAt).format('HH'),
            data: dataValues,
         };
      });
      const currentHour = dayjs().format('HH');
      const allHours = dayjs().localeData().weekdaysShort();
      const pastHours = allHours.slice(0, allHours.indexOf(currentHour) + 1);

      const chartDataByHour = pastHours.map((hour) => {
         const hourData = chartData.filter((data) => data.hour === hour);
         return {
            hour,
            data: hourData,
         };
      });
      res.json(new ApiResponse(true, chartDataByHour, 'Successfully retrieved RFID chart data'));
   } catch (error) {
      res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve RFID chart data', error));
   }
};

// get rfid chart data for last 7 days with day intervals
export const getRFIDChartDataWeek = async (req: Request, res: Response) => {
   try {
      const rfidData = await RFIDData.findAll({
         where: {
            createdAt: {
               [Op.gte]: dayjs().subtract(7, 'day').toDate(),
            },
         },
      });
      const chartData = rfidData.map(({ dataValues }) => {
         return {
            day: dayjs(dataValues.createdAt).format('DD'),
            data: dataValues,
         };
      });
      const currentDay = dayjs().format('DD');
      const allDays = dayjs().localeData().weekdaysShort();
      const pastDays = allDays.slice(0, allDays.indexOf(currentDay) + 1);

      const chartDataByDay = pastDays.map((day) => {
         const dayData = chartData.filter((data) => data.day === day);
         return {
            day,
            data: dayData,
         };
      });
      console.log('pastDays', pastDays);
      console.log('chartDataByDay', chartDataByDay);
      res.json(new ApiResponse(true, chartDataByDay, 'Successfully retrieved RFID chart data'));
   } catch (error) {
      res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve RFID chart data', error));
   }
};

// get rfid chart data for last 30 days with day intervals
export const getRFIDChartDataMonth = async (req: Request, res: Response) => {
   try {
      const rfidData = await RFIDData.findAll({
         where: {
            createdAt: {
               [Op.gte]: dayjs().subtract(30, 'day').toDate(),
            },
         },
      });
      const chartData = rfidData.map(({ dataValues }) => {
         return {
            day: dayjs(dataValues.createdAt).format('DD'),
            data: dataValues,
         };
      });
      const currentDay = dayjs().format('DD');
      const allDays = range(1, dayjs().daysInMonth());
      const pastDays = allDays.slice(0, allDays.indexOf(Number(currentDay)) + 1);

      const chartDataByDay = pastDays.map((day) => {
         const dayData = chartData.filter((data) => data.day === String(day));
         return {
            day,
            data: dayData,
         };
      });
      res.json(new ApiResponse(true, chartDataByDay, 'Successfully retrieved RFID chart data'));
   } catch (error) {
      console.log('error', error);
      res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve RFID chart data', error));
   }
};

// get rfid chart data for last 365 days with month intervals
export const getRFIDChartDataYear = async (req: Request, res: Response) => {
   try {
      const rfidData = await RFIDData.findAll({
         where: {
            createdAt: {
               [Op.gte]: dayjs().subtract(365, 'day').toDate(),
            },
         },
      });
      const chartData = rfidData.map(({ dataValues }) => {
         return {
            day: dayjs(dataValues.createdAt).format('DD'),
            data: dataValues,
         };
      });
      const currentDay = dayjs().format('DD');
      const allDays = dayjs().localeData().weekdaysShort();
      const pastDays = allDays.slice(0, allDays.indexOf(currentDay) + 1);

      const chartDataByDay = pastDays.map((day) => {
         const dayData = chartData.filter((data) => data.day === day);
         return {
            day,
            data: dayData,
         };
      });
      res.json(new ApiResponse(true, chartDataByDay, 'Successfully retrieved RFID chart data'));
   } catch (error) {
      res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve RFID chart data', error));
   }
};

// get rfid chart data for  the given date range
export const getRFIDChartDataRange = async (req: Request, res: Response) => {
   try {
      const { startDate, endDate } = req.body;
      const rfidData = await RFIDData.findAll({
         where: {
            createdAt: {
               [Op.gte]: startDate,
               [Op.lte]: endDate,
            },
         },
      });
      const chartData = rfidData.map(({ dataValues }) => {
         return {
            day: dayjs(dataValues.createdAt).format('DD'),
            data: dataValues,
         };
      });
      const currentDay = dayjs().format('DD');
      const allDays = dayjs().localeData().weekdaysShort();
      const pastDays = allDays.slice(0, allDays.indexOf(currentDay) + 1);

      const chartDataByDay = pastDays.map((day) => {
         const dayData = chartData.filter((data) => data.day === day);
         return {
            day,
            data: dayData,
         };
      });
      res.json(new ApiResponse(true, chartDataByDay, 'Successfully retrieved RFID chart data'));
   } catch (error) {
      res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve RFID chart data', error));
   }
};

// get rfid chart data for last 12 months with month intervals
export const getRFIDChartDataYearInByMonths = async (req: Request, res: Response) => {
   try {
      const rfidData = await RFIDData.findAll({
         where: {
            createdAt: {
               [Op.gte]: dayjs().subtract(12, 'months').toDate(),
            },
         },
      });
      const chartData = rfidData.map(({ dataValues }) => {
         return {
            month: dayjs(dataValues.createdAt).format('MMM'),
            data: dataValues,
         };
      });
      console.log('chartData', chartData);
      const currentMonth = dayjs().format('MMM');
      const allMonths = dayjs().localeData().monthsShort();
      const pastMonths = allMonths.slice(0, allMonths.indexOf(currentMonth) + 1);

      const chartDataByMonth = pastMonths.map((month) => {
         const monthData = chartData.filter((data) => data.month === month);
         return {
            month,
            data: monthData,
         };
      });
      res.json(new ApiResponse(true, chartDataByMonth, 'Successfully retrieved RFID chart data'));
   } catch (error) {
      res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve RFID chart data', error));
   }
};

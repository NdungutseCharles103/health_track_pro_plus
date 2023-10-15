/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ApiResponse<T = any> {
   data: T;
   success: boolean;
   message: string;
   error: any;
}

// type keyType = 'day' | 'month' | 'year' | 'week' | 'range' | 'days-month';
// export interface ChartData {
//    [key in keyType]: string;
//    data: any[];
// }

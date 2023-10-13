/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ApiResponse<T = any> {
    data: T;
    success: boolean;
    message: string;
    error: any ;
  }
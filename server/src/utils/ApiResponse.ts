
export class ApiResponse<T = any> {
  data: T= null as any;
  success: boolean = false;
  message: string = "Request Ok";
  error: any = null;

  constructor(success: boolean, data: T, message: string, error?: any) {
    this.data = data;
    this.success = success;
    this.message = message;
    this.error = error;
  }
}

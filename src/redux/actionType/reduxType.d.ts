interface INewsResponse {
  loading: boolean;
  data: null | any[] | any;
  message: string;
}

interface INewsParams {
  size: number;
  page: number;
}

export type NewsResponse = INewsResponse;
export type NewsParams = INewsParams;

const baseUrl = 'https://chlatvai.phsartech.com/api/';

export enum ApiEndPoint {
  NEWS_LIST = 'news/list',
}

const ApiManager = {
  get: async (end_point: ApiEndPoint) => {
    return await (await fetch(`${baseUrl}${end_point}`)).json();
  },
};

export {ApiManager};

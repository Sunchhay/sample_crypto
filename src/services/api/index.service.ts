import { create } from "apisauce";

export const baseUrl = `https://moitv.phsartech.com/api/`;
// export const imageUrl = `http://commissariat.phsartech.com/file_manager`;

export const api = {
  Get: async (route_name: string) => {
    const apiSauce = create({
      baseURL: baseUrl,
      headers: {
        'Cache-Control': 'no-cache',
        'Accept': 'application/json',
      },
    })
    return new Promise(async (resolve, reject) => {
      try {
        apiSauce.get(route_name).then(response => {
          resolve(response.data)
        })
      } catch (error) {
        console.log(`Request URL : ${baseUrl}${route_name}`);
        reject(error);
        console.log('error=====', error);
      }
    });
  },
  POST: async (end_point: any, object?: any) => {
    const apiSauce = create({
      baseURL: baseUrl,
      headers: {
        'Cache-Control': 'no-cache',
        'Accept': 'application/json',
        // 'Content-Type':'multipart/form-data',
      },
    })
    return new Promise(async (resolve, reject) => {
      try {
        apiSauce.post(end_point, object).then((response: any) => {
          resolve(response.data)
        })
      } catch (error) {
        console.log(`Request URL : ${baseUrl}${end_point}`);
        console.log('error===', error);
        reject(error);
      }
    });
  }
};
import axios from 'axios';
import { IFormData } from '../interface/IFormData';

export class MokkyDev {
  _apiBase = 'https://c7ab12de49ec742d.mokky.dev';

  getData = async (url: string) => {
    const res = await axios.get(url);

    return await res.data;
  };

  getAllTeam = async () => {
    const url = this._apiBase + '/team';
    const data = await this.getData(url);
    return data;
  };

  getSneakers = async ({
    page,
    limit = 6,
  }: {
    page: number;
    limit?: number;
  }) => {
    const url =
      this._apiBase +
      '/sneakers' +
      '?' +
      `page=${page}` +
      '&' +
      `limit=${limit}`;
    const data = await this.getData(url);
    return data;
  };
  getSneakersByFilter = async ({
    price,
    gender,
    size,
    page,
  }: {
    price: { low: number; high: number };
    gender: 'мужской' | 'женский' | null;
    size: number[];
    page: number;
  }) => {
    let url =
      this._apiBase +
      '/sneakers' +
      '?' +
      `page=${page}` +
      '&' +
      `limit=6` +
      '&' +
      `price[from]=${price.low}&price[to]=${price.high}`;
    if (gender) {
      url = url + '&' + `${this.createStringRequest('gender', gender)}`;
    }
    if (size.length > 0) {
      url = url + '&' + `${this.createStringRequest('sizes', size)}`;
    }
    const data = await this.getData(url);
    return data;
  };

  createStringRequest = (
    keyString: string,
    value: string[] | number[] | 'мужской' | 'женский'
  ): string => {
    let strValue = '';
    if (value === 'мужской' || value === 'женский') {
      strValue = `${keyString}=${value}*`;
    } else {
      strValue = value.map((val) => `${keyString}[]=${val}`).join('&');
    }
    return strValue;
  };

  getOrderCount = async () => {
    const url = this._apiBase + '/orders';
    const res = await axios.get(url);

    return res.data.length;
  };

  postOrder = async (payload: any) => {
    const res = await axios.post(this._apiBase + '/orders', payload);
  };
}

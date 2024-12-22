import axios from "axios";

export class MokkyDev {
  _apiBase = "https://c7ab12de49ec742d.mokky.dev";

  getData = async (url: string) => {
    const res = await axios.get(url);

    return await res.data;
  };

  getAllTeam = async () => {
    const url = this._apiBase + "/team";
    const data = await this.getData(url);
    return data;
  };
}

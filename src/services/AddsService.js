import { AppState } from "../AppState";
import { Add } from "../models/Add";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";


class AddsService {
  async getAdds() {
    console.log('What up')
    const res = await api.get('api/ads')
    AppState.add = res.data.map(a => new Add(a))
    logger.log(res.data);
  }
}

export const addsService = new AddsService
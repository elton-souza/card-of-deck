import axios, { AxiosResponse } from "axios";
import { CardInfo, CardList } from "../types/card";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const getCardList = async (): Promise<AxiosResponse<CardList>> =>
  api.get("pokemon", {
    params: {
      limit: 8,
    },
  });

export const getCardInfo = async (
  name: string
): Promise<AxiosResponse<CardInfo>> => api.get(`pokemon/${name}`);

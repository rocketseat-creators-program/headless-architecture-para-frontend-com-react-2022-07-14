import { useState, useEffect } from "react";
import { ISmartphone } from "../components/SmartphoneItem";
import { useFetch } from "./useFetch";

function paramsToString(storage?: string, manufacturer?: string) {
  let params = {};

  if (storage) {
    params = { ...params, storage };
  }

  if (manufacturer) {
    params = { ...params, manufacturer };
  }

  return params;
}

export const useSmartphones = () => {
  const [storage, setStorage] = useState<string>();
  const [manufacturer, setManufacturer] = useState<string>();

  const paramsString = new URLSearchParams(
    paramsToString(storage, manufacturer)
  );

  const { response } = useFetch<ISmartphone[]>(
    `http://localhost:3333/smartphones?${paramsString}`
  );

  return {
    smartphones: response,
    setManufacturer,
    setStorage,
  };
};

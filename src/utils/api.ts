import type { HitModel, ResponseModel } from "@/models";

export const getSearchResults = async (
  value: string
): Promise<Array<HitModel>> => {
  if (value === "") {
    return [];
  }

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
    param: value,
  });
  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  try {
    const response = await fetch(
      "http://localhost:3010/search",
      requestOptions
    );
    const result = (await response.json()) as ResponseModel;
    return result.hits.hits;
  } catch (error) {
    console.log(error);
    return [];
  }
};

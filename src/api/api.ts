import {
  ApiErrorResponse,
  ApisauceInstance,
  ApiResponse as SauceApiResponse,
  create,
} from "apisauce";
import {
  Provider,
  SearchItem,
  SongCollection,
  WithProvider,
} from "./api.types";

export interface ApiError {
  problem: string;
}

function isApiError<T, U>(
  response: SauceApiResponse<T, U>,
): response is ApiErrorResponse<U> {
  return response.ok === false;
}

export type ApiResponse<T> = T | ApiError;

export class ApiClient {
  client: ApisauceInstance;

  constructor(baseURL: string, accessToken: string) {
    this.client = create({
      baseURL: baseURL,
      timeout: 10_000,
      headers: {
        Authorization: accessToken,
      },
    });
  }

  private async apiWrapper<T, U>(
    response: Promise<SauceApiResponse<T, U>>,
  ): Promise<ApiResponse<T>> {
    const resp = await response;

    if (isApiError(resp)) {
      return { problem: `${resp.problem}: ${resp.data}` };
    }

    if (!resp.data) {
      return { problem: "Client Error: could not find data in response body" };
    }

    return resp.data;
  }

  async suggest(query: string): Promise<ApiResponse<WithProvider<string>[]>> {
    return this.apiWrapper(
      this.client.get<WithProvider<string>[], string>(
        `/api/v1/scrape/suggest?keyword=${query}`,
      ),
    );
  }

  async search(
    query: string,
    type: "all" | "song" | "artist" | "playlist" | "album" = "all",
  ): Promise<ApiResponse<WithProvider<SearchItem>[]>> {
    return this.apiWrapper(
      this.client.get<WithProvider<SearchItem>[], string>(
        `/api/v1/scrape/search?keyword=${query}&t=${type}`,
      ),
    );
  }

  async collection(
    provider: Provider,
    id: string,
  ): Promise<ApiResponse<SongCollection>> {
    return this.apiWrapper(
      this.client.get<SongCollection, string>(
        `/api/v1/scrape/collection?provider=${provider}&id=${id}`,
      ),
    );
  }
}

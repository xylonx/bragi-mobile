import { useMemo } from "react";
import { ApiClient } from "../api";
import store from "../store";

const useApiClient = () => {
  const server = store.getState().settings.server;

  const client = useMemo(() => {
    if (server) {
      return new ApiClient(server.uri, server.access_token);
    }
  }, [server]);

  return client;
};

export default useApiClient;

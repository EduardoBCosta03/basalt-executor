import { Client } from "pg";
import type { Adapter, AdapterConfig } from "./adapter.js";

export function createPgAdapter(config: AdapterConfig): Adapter {
  const client = new Client(config);

  const connect = async () => {
    await client.connect();
  };

  const disconnect = async () => {
    await client.end();
  };

  const execute = async (query: string, params: any[]) => {
    return await client.query(query, params);
  };

  const isAlive = async () => {
    try {
      const result = await client.query("SELECT 1");
      return result.rowCount === 1;
    } catch (error) {
      return false;
    }
  };
  return {
    connect,
    disconnect,
    execute,
    isAlive,
  };
}

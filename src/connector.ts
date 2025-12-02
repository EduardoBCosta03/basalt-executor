import type { Adapter, AdapterConfig } from "./drivers/adapter.js";

export class Executor {
  private readonly adapter: Adapter;
  private readonly config: AdapterConfig;

  constructor({
    adapter,
    config,
  }: {
    adapter: Adapter;
    config: AdapterConfig;
  }) {
    this.adapter = adapter;
    this.config = config;
  }

  async connect() {
    await this.adapter.connect();
  }

  async disconnect() {
    await this.adapter.disconnect();
  }

  async query(query: string, params: any[]) {
    return await this.adapter.execute(query, params);
  }
  async isAlive() {
    return await this.adapter.isAlive();
  }

  async execute(query: string, params: any[]) {
    return await this.adapter.execute(query, params);
  }

  async isDirty(){}
}

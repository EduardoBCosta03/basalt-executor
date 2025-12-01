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
}

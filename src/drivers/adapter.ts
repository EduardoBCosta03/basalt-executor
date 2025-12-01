export interface Adapter {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  execute: (query: string, params: any[]) => Promise<any>;
  isAlive: () => Promise<boolean>;
}

export interface AdapterConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

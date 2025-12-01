export class DatabaseError extends Error {
  constructor(
    message: string,
    public readonly details: string,
    public readonly sql: string,
    public readonly params: any[]
  ) {
    super(message);
    this.name = "DatabaseError";
  }

  static toSqlString(sql: string, params: any[]): string {
    return sql.replace(/:(\w+)/g, (match, p1) => {
      return params[p1] || match;
    });
  }
}

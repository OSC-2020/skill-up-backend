export default class DBError extends Error {
  code: number;
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }

  static notFoundError(message: string) {
    return new DBError(message, 404);
  }
}

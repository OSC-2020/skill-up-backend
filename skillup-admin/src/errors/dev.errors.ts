export default class DevError extends Error {
  code: number;
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }

  static notImplementedError(message: string) {
    return new DevError(message, 404);
  }
}

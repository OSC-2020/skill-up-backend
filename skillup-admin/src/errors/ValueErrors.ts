export default class ValueError extends Error {
  code: number;
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }

  static emptyArrayError(message: string) {
    return new ValueError(message, 404);
  }
}

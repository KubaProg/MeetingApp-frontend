export class UserModel {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,
    public roleIds: number[],
    public jwtToken?: string,
  ) {
  }
}

import { Provide, Plugin } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import { User } from '../entity/user';

@Provide()
export class UserService {
  @Plugin()
  jwt;

  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }

  async getToken(options: any) {
    console.log('options.username::', options.username);
    const data = await User.findOne({
      where: {
        username: options.username,
      },
      raw: true,
    });
    if (!data) {
      await User.create({
        ...options,
      });
      return {
        token: await this.jwt.sign(options),
      };
    } else {
      return {
        token: await this.jwt.sign(options),
        code: 0,
      };
    }
    // console.log('options::', options);
  }
}

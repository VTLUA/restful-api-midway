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
      return {
        code: 1,
        msg: "账号不存在"
      }
      // await User.create({
      //   ...options,
      // });
      // return {
      //   token: await this.jwt.sign(options),
      // };
    } else {
      console.log("options.password !== data.password::", options.password !== data.password)
      if (options.password !== data.password) {
        return {
          code: 1,
          msg: "用户密码错误，请重新输入！"
        }
      }
      return {
        token: await this.jwt.sign(options),
        code: 0,
      };
    }
    // console.log('options::', options);
  }
}

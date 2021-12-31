import { Controller, Get, Param, Provide, ALL, Post, Body, Inject } from '@midwayjs/decorator';
import { User, Account } from '../interface';
import { UserService } from '../service/user';

@Provide()
@Controller('/api/user')
export class UserController{

  @Inject()
  userService: UserService;

  @Get('/:uid')
  async getUser(@Param(ALL) user: User): Promise<User> {
    console.log(123123);
    return {
      id: '123',
      name: '123',
      age: 1,
    };
  }

  @Post('/getToken')
  async getToken(@Body(ALL) queryObject: Account) {
    const data = await this.userService.getToken({
      ...queryObject,
    });
    return data;
  }
}

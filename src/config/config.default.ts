import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { join } from 'path';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1631602847850_1035';

  config.jwt = {
    enable: true,
    secret: 'test123456',
    ignore: ['/api/user/getToken'],
  };

  // add your config here
  config.middleware = [];

  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true,
  };

  config.static = {
    prefix: '/',
    dir: join(appInfo.baseDir, 'app/public'),
  };

  config.security = {
    csrf: {
      enable: true,
    },
    domainWhiteList: ['http://10.0.8.6:7002', 'http://127.0.0.1:3000'], // 容许跨域的域名
  };

  return config;
};

export const cors = {
  origin: '*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
};

export const sequelize = {
  options: {
    database: 'datas',
    username: 'root',
    password: '123456',
    host: '10.0.8.6',
    port: '3306',
    encrypt: false,
    dialect: 'mysql',
    define: { chareset: 'utf8' },
    timezone: '+08:00',
    loggin: console.log,
  },
  sync: true,
};

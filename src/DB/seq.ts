import { Sequelize } from 'sequelize';
import config from '../config/config.default';

//  分别传递参数 (其它数据库)
const sequelize = new Sequelize(
  config.APP_MYSQL_DB || '',
  config.APP_MYSQL_USER_NAME || '',
  config.APP_MYSQL_PASSWORD,
  {
    host: config.APP_MYSQL_HOST,
    // /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    dialect: 'mysql',
  }
);
//  传递一个配置对象
// try {
//   sequelize.authenticate();
//   console.log('成功连接到数据库');
// } catch (error) {
//   console.error('失败连接到数据库:', error);
// }

export default sequelize;

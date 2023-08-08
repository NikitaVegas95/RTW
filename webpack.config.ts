import webpackServerConfig from './cfg/webpack.server.config';
import webpackClientConfig from './cfg/webpack.client.config';

const webpackConfig: any[] = [webpackClientConfig, webpackServerConfig];

export default webpackConfig;

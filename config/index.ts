import devConfig from './config.dev';
import prodConfig from './config.pro';

const NODE_ENV = process.env.NODE_ENV || 'development';

export default NODE_ENV === 'development' ? devConfig : prodConfig;
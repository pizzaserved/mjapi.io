import env from '../env.json';
// The expected structure of the env.json
type ApiConfig = {
  api_type: 'dev' | 'preprod' | 'prod';
  api_urls: {
    dev: string;
    preprod: string;
    prod: string;
  };
  btcPay_url: string;
};

const config = env as ApiConfig;

export const URL_PATH = config.api_urls[config.api_type];
export const BTCPAY_PATH = config.btcPay_url;

interface IEnv {
    API_ENDPOINT: string;
    NODE_ENV: string;
}

const env: IEnv = {
    API_ENDPOINT: process.env.API_ENDPOINT,
    NODE_ENV: process.env.NODE_ENV
};

export default env;

const dotenv = require("dotenv");

const ENV_MAP = {
    development: 'development',
    local: 'local',
    production: 'production'
};
dotenv.config({ path: `.env.${ENV_MAP[process.env.NODE_ENV || 'local']}` });

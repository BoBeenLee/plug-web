import { execute, makePromise } from "apollo-link";
import { createHttpLink } from "apollo-link-http";

import env from "./environment";

const url = env.API_ENDPOINT;

const getParams = () => ({
    headers: {}
});

type IFetch = (query: string, variables?: object) => Promise<any>;

const httpLink = createHttpLink({
    headers: getParams().headers,
    uri: url
});

const apiFetch: IFetch = (query, variables) => {
    const context = { headers: getParams().headers };

    const operation = {
        context,
        query,
        variables
    };

    return makePromise(execute(httpLink, operation)).then(response => {
        return response;
    });
};

export default apiFetch;
export { IFetch, getParams };

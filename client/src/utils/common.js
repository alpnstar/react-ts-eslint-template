import _ from "lodash";

export const buildUrl = (url, params) => {
    let urlWithParams = url;

    Object.entries(params).forEach(([key, value], i) => {
        const sign = !i ? "?" : "&";
        urlWithParams += `${sign}${key}=${value}`;
    });

    return urlWithParams;
};
export const clearParams = (params, exclusion = []) =>
    _.reduce(params, (acc, value, item) => {
    if (value || exclusion.indexOf(item) !== -1) acc[item] = value;
    return acc;
}, {});

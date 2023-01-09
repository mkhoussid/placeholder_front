export const isAsyncFunction = ({ func }: { func: Object }) => func.constructor.name === 'AsyncFunction';

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms | 0));

export const isAsyncFunction = ({ func }: { func: Object }) => func.constructor.name === 'AsyncFunction';

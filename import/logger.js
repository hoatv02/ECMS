function logger(log,type="log"){
    console[type](log);
}
export const TYPE_LOG = "log";
export const TYPE_WARN = "warn";
export const TYPE_ERROR = "error";


export default logger;
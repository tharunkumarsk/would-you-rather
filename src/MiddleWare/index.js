import thunk from "./node_modules/redux-thunk";
import logger from "./logger";
import { applyMiddleware } from "./node_modules/redux";

export default applyMiddleware(thunk, logger);

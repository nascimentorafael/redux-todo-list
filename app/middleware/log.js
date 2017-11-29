const logMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  console.log(`${ action.type }`, action.payload);

  next(action);
};

export default logMiddleware;
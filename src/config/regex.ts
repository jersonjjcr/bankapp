export const regularExpressions = {
  email: /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?=.*[a-zA-Z]).{10,16}$/,
  uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
};

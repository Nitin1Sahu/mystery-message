const _config = {
  MONDODB_URI: process.env.MONDODB_URI,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
};
export const config = Object.freeze(_config);

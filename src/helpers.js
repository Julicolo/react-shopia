export const isDevelopment = process.env.NODE_ENV === 'development';

export function linkTo(url) {
  const prefix = isDevelopment ? '/' : '/shopia/';
  return prefix + url.replace(/^\/+/, '');
}

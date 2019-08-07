export const isDevelopment = process.env.NODE_ENV === 'development';

export function linkTo(url) {
  const prefix = isDevelopment ? '/' : '/shopia/';
  return prefix + url.replace(/^\/+/, '');
}

const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 500,
  tablet: 850,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

const device = Object.keys(size).reduce((acc, cur) => {
  acc[cur] = `(max-width: ${size[cur]}px)`;
  return acc;
}, {});
export default device;

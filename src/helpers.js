export function linkTo(url) {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const prefix = isDevelopment ? '/' : '/shopia/';
  return prefix + url.replace(/^\/+/, '');
}

const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 500,
  tabletS: 650,
  tabletM: 850,
  tabletL: 1000,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

const device = Object.keys(sizes).reduce((acc, cur) => {
  acc[cur] = `(max-width: ${sizes[cur]}px)`;
  return acc;
}, {});
export default device;

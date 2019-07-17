import parser from 'ua-parser-js';

const mobileDetect = userAgentStr => {
  return parser(userAgentStr).device.type === 'mobile';
};

export {mobileDetect}
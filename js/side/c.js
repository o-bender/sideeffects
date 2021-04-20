const fn = () => {
  console.log('module c loading');
  console.info('module c wait long execution operation');
  for (let i = 0; i < 10000000000; i++) {

  }
  console.log('module c loaded');
};
const data = fn();

export {fn, data};

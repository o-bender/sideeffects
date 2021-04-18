const fn = () => {
  console.log('module g loading');
  console.info('module g create map');
  const map = document.createElement('div');
  map.setAttribute('id', 'map');
  document.body.append(map);
  console.log('module g loaded');
};
const data = fn();

export {fn, data};

const fn = () => {
  console.log('module d loading');
  const map = document.querySelector('#map');
  console.error(`module d map is ${map}`);

  console.log('module d loaded');
};

export {fn};

const ROUTELIST = [
  {
    path: '*',
    name: 'notFound',
    component: '我404了'
  },
  {
    path: '/',
    name: 'index',
    component: '我是首页index'
  },
];

for (let index = 1; index < 10; index++) {
  const name = `page${index}`;
  ROUTELIST.push({
    path: `/${name}`,
    name,
    component: `我是${name}`
  })
  
}

export { ROUTELIST };

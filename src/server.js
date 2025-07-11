import jsonServer from 'json-server';

const server = jsonServer.create();

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use('/api', router);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the API! Use /api for endpoints.' });
});

server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});

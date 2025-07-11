import jsonServer from 'json-server';

const server = jsonServer.create();

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the API! Use /api for endpoints.' });
});
server.use('/api', router);

server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});

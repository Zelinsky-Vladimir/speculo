import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

router.get('/', async (ctx, next) => {
  console.log('called');

  await next();
});

app.use(logger());
app.use(json());
app.use(bodyParser());

// Routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, host, () => {
  console.log(`Listening on: http://${host}:${port}`);
});

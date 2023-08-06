import * as path from 'path';
import { FastifyInstance } from 'fastify';
import autoLoadPlugin from '@fastify/autoload';
import multipartPlugin from '@fastify/multipart';
import staticPlugin from '@fastify/static';

/* eslint-disable-next-line */
export interface AppOptions {}

export const app = async (fastify: FastifyInstance, opts: AppOptions) => {
  fastify.register(multipartPlugin);
  fastify.register(staticPlugin, {
    root: path.join(process.cwd(), 'apps', 'server', 'uploads'),
    prefix: '/static/',
  });
  fastify.register(autoLoadPlugin, {
    dir: path.join(__dirname, 'plugins'),
    options: { ...opts },
  });

  fastify.register(autoLoadPlugin, {
    dir: path.join(__dirname, 'entities'),
    matchFilter: /route/,
    dirNameRoutePrefix: false,
    options: {
      ...opts,
      prefix: '/api',
    },
  });
};

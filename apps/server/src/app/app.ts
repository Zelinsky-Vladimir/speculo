import * as path from 'path';
import { FastifyInstance } from 'fastify';
import autoLoad from '@fastify/autoload';
import multipart from '@fastify/multipart';

/* eslint-disable-next-line */
export interface AppOptions {}

export const app = async (fastify: FastifyInstance, opts: AppOptions) => {
  fastify.register(multipart);
  fastify.register(autoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: { ...opts },
  });

  fastify.register(autoLoad, {
    dir: path.join(__dirname, 'entities'),
    matchFilter: /route/,
    dirNameRoutePrefix: false,
    options: {
      ...opts,
      prefix: '/api',
    },
  });
};

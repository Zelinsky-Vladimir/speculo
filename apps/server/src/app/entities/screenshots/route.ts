import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { v4 as uuid } from 'uuid';
import { screenshotsService } from './controller';

const routes = async (fastify: FastifyInstance) => {
  fastify.get('/screenshots', async (req: FastifyRequest, res: FastifyReply) => {
    const mockData = {
      id: uuid(),
      previousImage: 'previous.png',
      nextImage: 'next.png',
    };

    res.send(mockData);
  });

  fastify.get(
    '/screenshots/images/:imageName',
    async (req: FastifyRequest<{ Params: { imageName: string } }>, res: FastifyReply) => {
      await res.sendFile(req.params.imageName);
    }
  );

  fastify.post('/screenshots', async (req: FastifyRequest, res: FastifyReply) => {
    const { file, filename } = await req.file();
    await screenshotsService.saveScreenshot({ file, filename });

    res.send({ message: 'Screenshot saved successfully', filename });
  });
};

export default routes;

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { screenshotsService } from './controller';

const routes = async (fastify: FastifyInstance) => {
  fastify.post('/screenshots', async (req: FastifyRequest<{ Body: FormData }>, res: FastifyReply) => {
    const { file, filename } = await req.file();
    await screenshotsService.saveScreenshot({ file, filename });

    res.send({ message: 'Screenshot saved successfully', filename });
  });
};

export default routes;

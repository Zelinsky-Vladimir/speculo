import fs from 'fs';
import { promisify } from 'util';
import { pipeline } from 'stream';
import { BusboyFileStream } from '@fastify/busboy';

const pump = promisify(pipeline);

class ScreenshotsService {
  async saveScreenshot({ file, filename }: { file: BusboyFileStream; filename: string }): Promise<void> {
    await pump(file, fs.createWriteStream(`./${filename}`));
  }
}

export const screenshotsService = new ScreenshotsService();

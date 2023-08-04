import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import { pipeline } from 'stream';
import { BusboyFileStream } from '@fastify/busboy';

const pump = promisify(pipeline);

class ScreenshotsService {
  async saveScreenshot({ file, filename }: { file: BusboyFileStream; filename: string }): Promise<void> {
    const uploadDirPath = path.join(process.cwd(), 'apps', 'server', 'uploads');

    if (!fs.existsSync(uploadDirPath)) {
      fs.mkdirSync(uploadDirPath);
    }

    await pump(file, fs.createWriteStream(path.join(uploadDirPath, filename)));
  }
}

export const screenshotsService = new ScreenshotsService();

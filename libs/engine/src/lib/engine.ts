import html2canvas from 'html2canvas';
import axios from 'axios';

const createScreenshot = async (name: string): Promise<File> => {
  const rootElem = document.body;
  const canvas = await html2canvas(rootElem);
  const dataUrl = canvas.toDataURL('image/png');

  const blob = await fetch(dataUrl).then(res => res.blob());
  const file = new File([blob], `${name}.png`, { type: 'image/png' });

  return file;
};

const defaultOnSaveHandler = async (screenShot: Blob): Promise<void> => {
  const form = new FormData();
  form.append('file', screenShot);

  axios.post('/api/screenshots', form);
};

export const engine = {
  screenShot: async (
    { onSave, name }: { onSave?: (screenShot: File) => Promise<void>; name: string } = {
      name: new Date().toISOString(),
    }
  ) => {
    try {
      const screenShot = await createScreenshot(name);
      const saveHandler = typeof onSave === 'function' ? onSave : defaultOnSaveHandler;

      await saveHandler(screenShot);
    } catch (err) {
      console.log(err);
    }
  },
};

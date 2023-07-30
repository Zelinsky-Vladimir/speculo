import html2canvas from 'html2canvas';
import { download } from '@speculo/utils';

const getDefaultScreenShotMetadata = () => {
  const now = new Date();

  return {
    name: now.toISOString(),
    date: now,
  };
};

type Metadata =
  | string
  | undefined
  | {
      name?: string;
      date?: Date | string;
    };

const makeScreenshot = async () => {
  try {
    const rootElem = document.body;
    const canvas = await html2canvas(rootElem);
    const base64image = canvas.toDataURL('image/png');

    download(base64image, 'Screenshot sample.png');
  } catch (err) {
    console.log(err);
  }

  // const base64image = canvas.toDataURL('image/png');
  // window.location.href = base64image;
};

export const engine = {
  screenShot: (metadata?: Metadata) => {
    const defaultMetadata = getDefaultScreenShotMetadata();

    makeScreenshot();

    if (typeof metadata === 'string') {
      console.log({
        ...defaultMetadata,
        name: metadata,
      });

      return;
    }
  },
};

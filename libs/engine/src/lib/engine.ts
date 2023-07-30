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

export const engine = {
  screenShot: (metadata?: Metadata) => {
    const defaultMetadata = getDefaultScreenShotMetadata();

    if (typeof metadata === 'string') {
      console.log({
        ...defaultMetadata,
        name: metadata,
      });

      return;
    }

    console.log({ ...defaultMetadata, ...(metadata || {}) });
  },
};

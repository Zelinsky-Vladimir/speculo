import React, { useEffect } from 'react';

import { engine } from '@speculo/engine';

export const App = () => {
  useEffect(() => {
    engine.screenShot('Test screenshot');
  }, []);

  return <div>Speculo Viewer</div>;
};

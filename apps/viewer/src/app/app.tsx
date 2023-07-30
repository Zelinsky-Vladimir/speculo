import { engine } from '@speculo/engine';

export const App = () => {
  return (
    <div>
      <button onClick={() => engine.screenShot('Test screenshot')}>Download screenshot ebat`</button>
    </div>
  );
};

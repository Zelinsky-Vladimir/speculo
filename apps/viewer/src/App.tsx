import { Header } from './features/Header';
import { Footer } from './features/Footer';
import { ScreenshotsComparer } from './features/ScreenshotsComparer';

export const App = () => {
  return (
    <div className="grid grid-rows-[min-content_1fr_min-content] min-h-screen">
      <Header />
      <ScreenshotsComparer />
      <Footer />
    </div>
  );
};

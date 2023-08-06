import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Previous } from './Previous';
import { Next } from './Next';
import { Loader } from '../../shared/Loader';

type ComparableEntity = {
  id: string;
  previousImage: string;
  nextImage: string;
};

const addImageBasePath = (image: string): string => `/api/screenshots/images/${image}`;

const useScreenshotsListsQuery = () => {
  return useQuery(['screenshotsList'], () => axios.get<ComparableEntity>('/api/screenshots'), {
    select: response => ({
      ...response.data,
      previousImage: addImageBasePath(response.data.previousImage),
      nextImage: addImageBasePath(response.data.nextImage),
    }),
  });
};

export const ScreenshotsComparer = () => {
  const screenshotsListQuery = useScreenshotsListsQuery();

  if (screenshotsListQuery.isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (screenshotsListQuery.error) {
    return <div>Error happened while loading screenshots...</div>;
  }

  const { id, previousImage, nextImage } = screenshotsListQuery.data as ComparableEntity;

  return (
    <div className="grid grid-cols-2 gap-6 px-2">
      <div>
        <Previous id={id} image={previousImage} />
      </div>
      <div>
        <Next id={id} image={nextImage} />
      </div>
    </div>
  );
};

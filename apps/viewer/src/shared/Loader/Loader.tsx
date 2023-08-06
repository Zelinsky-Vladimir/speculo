import { ReactComponent as Spinner } from './spinner.svg';

type Props = {
  loaderSize?: string;
  size?: string;
};

export const Loader = ({ loaderSize = '100%', size = '100px' }: Props) => {
  return (
    <div className="grid place-items-center" style={{ width: loaderSize, height: loaderSize }}>
      <Spinner className="animate-slow-spin" style={{ width: size, height: size }} />
    </div>
  );
};

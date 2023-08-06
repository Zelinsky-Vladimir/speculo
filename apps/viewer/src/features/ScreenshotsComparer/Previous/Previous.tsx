type Props = {
  id: string;
  image: string;
};

export const Previous = ({ image }: Props) => {
  return (
    <div className="border border-stone-200">
      <img src={image} alt="Previous screenshot to compare" />
    </div>
  );
};

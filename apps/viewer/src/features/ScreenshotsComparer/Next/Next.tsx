type Props = {
  id: string;
  image: string;
};

export const Next = ({ image }: Props) => {
  return (
    <div className="border border-stone-200">
      <img src={image} alt="Next screenshot to compare" />
    </div>
  );
};

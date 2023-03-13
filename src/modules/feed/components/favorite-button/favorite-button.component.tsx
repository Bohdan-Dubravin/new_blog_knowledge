import IonIcon from '@reacticons/ionicons';

interface FavoriteButtonProps {
  slug: string;
  count: number;
  isFavorited: boolean;
}

const FavoriteButton = ({ slug, count, isFavorited }: FavoriteButtonProps) => {
  return (
    <button className="text-conduit-green group flex items-center  border border-conduit-green hover:bg-conduit-green  text-center  cursor-pointer py-1 px-2 text-sm rounded focus:bg-conduit-darkGreen focus:text-white">
      {isFavorited ? (
        <IonIcon
          name="heart"
          className="group-hover:text-white group-hover:fill-white"
        />
      ) : (
        <IonIcon
          name="heart"
          className="group-hover:text-white group-hover:fill-white text-conduit-green"
        />
      )}
      <span className="ml-1 font-normal group-hover:text-white">{count}</span>
    </button>
  );
};

export default FavoriteButton;

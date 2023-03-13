import IonIcon from "@reacticons/ionicons";

const FavoriteButton = () => {
  return (
    <button className="text-conduit-green group flex items-center  border border-conduit-green hover:bg-conduit-green  text-center  cursor-pointer py-1 px-2 text-sm rounded focus:bg-conduit-darkGreen focus:text-white">
      <IonIcon
        name="heart"
        className="group-hover:text-white group-hover:fill-white"
      />
      <span className="ml-1 font-normal group-hover:text-white">70</span>
    </button>
  );
};

export default FavoriteButton;

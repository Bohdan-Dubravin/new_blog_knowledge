import { FollowButton } from "./follow-button.component";

const ProfileBanner = () => {
  return (
    <div className="bg-conduit-gray-100 pt-8 pb-4 mb-8">
      <div className="container">
        <img
          src={
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
          className="w-25 h-25 rounded-full mx-auto mb-4 object-cover"
          alt={` avatar`}
        />
        <h2 className="text-center font-bold text-2xl">username</h2>
      </div>
      <div className="flex justify-end">
        {/* {user?.username !== profile.username ? ( */}
        <FollowButton
        // username={profile.username}
        // isFollowed={profile.following}
        />
        {/* // ) : (
        //   <Button onClick={goToSettings}>
        //     <i className="mr-1 ion-gear-a" />
        //     Edit profile settings
        //   </Button>
        // )} */}
      </div>
    </div>
  );
};

export default ProfileBanner;

import IonIcon from "@reacticons/ionicons";
import { ComponentProps, FC } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../../common/components/button/button.component";

interface FollowButtonProps {
  username?: string;
  isFollowed?: boolean;
  btnStyle?: ComponentProps<typeof Button>["btnStyle"];
}

export const FollowButton = ({
  username,
  isFollowed,
  btnStyle,
}: FollowButtonProps) => {
  // const [triggerFollow] = useFollowUserMutation();
  // const [triggerUnfollow] = useUnfollowUserMutation();
  // const auth = useAuth();
  const navigate = useNavigate();

  // const toggleFollow = () => {
  //   if (!auth.isLoggedIn) {
  //     navigate(routes.signIn.path);
  //     return;
  //   }

  //   try {
  //     if (!isFollowed) {
  //       triggerFollow({ username: encodeURIComponent(username) }).unwrap();
  //     } else {
  //       triggerUnfollow({ username: encodeURIComponent(username) }).unwrap();
  //     }
  //   } catch (e) {
  //     toast.error("Something wen't wrong. Please, try again later");
  //   }
  // };

  return (
    <Button btnStyle={btnStyle}>
      <IonIcon name="add-outline" className="leading-5 text-gray-500" />
      &nbsp; {isFollowed ? "Unfollow" : "Follow"} {username}
    </Button>
  );
};

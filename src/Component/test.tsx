/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { UserInfoThunk } from "../Store/Thunks/UserInfoThunk";
import { userProps } from "../Types/Test";
import { useThunk } from "../Hooks/useThunk";
import { VscCircle } from "react-icons/vsc";

function Test() {
  const [UserFetch, userIsLoading, userError] = useThunk(UserInfoThunk);
  const { data, error } = useSelector((state: userProps) => state.user);

  useEffect(() => {
    UserFetch();
  }, []);

  const content = userIsLoading ? (
    <VscCircle className="animate-pulse text-xl" />
  ) : userError ? (
    <p>{error.message && "Error Fetching"}</p>
  ) : (
    <>
      {data.map((e: any) => (
        <p key={e.id}>{e.name}</p>
      ))}
    </>
  );

  return <div>{content}</div>;
}

export default Test;

import { userInfoReducer } from "../Store/Slices/UserSlice";

export interface userProps {
  user: ReturnType<typeof userInfoReducer>;
}

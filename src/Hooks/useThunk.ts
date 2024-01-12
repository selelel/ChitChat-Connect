/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export const useThunk = (thunk: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);
  const dispatch = useDispatch();

  const thunkCallback = useCallback(() => {
    setIsLoading(true);
    dispatch(thunk())
      .unwrap()
      .catch((e: any) => setError(e))
      .finally(() => setIsLoading(false));
  }, [dispatch, thunk]);

  return [thunkCallback, isLoading, error];
};

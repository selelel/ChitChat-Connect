import { useDispatch } from "react-redux";
import { Import_Comments } from "../Store";

function Test() {
  const dispatch = useDispatch();

  const onTest = () => {
    dispatch(Import_Comments("Hello"));
  };
  return (
    <div>
      <button onClick={onTest}>click!</button>
    </div>
  );
}

export default Test;

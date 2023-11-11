import React, { Dispatch, SetStateAction } from "react";

export default function ToggleButton({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<Boolean>>;
}) {
  return (
    <button onClick={() => setOpen((prev: Boolean) => !prev)}>toggle</button>
  );
}

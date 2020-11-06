import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { BigWhiteboard } from "react-component-whiteboard";

export default function PopupPage() {
  return (
    <>
      <Popup trigger={<button>Open Whiteboard</button> } position="right center">
        <div>
          <BigWhiteboard />
        </div>
      </Popup>
    </>
  );
}

import { forwardRef, useImperativeHandle, useRef } from "react";
import {createPortal} from 'react-dom'

const ResultModal = forwardRef(function ResultModal(
  { targetTime, RemainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = RemainingTime <= 0;
  const formattedRemainingTime = (RemainingTime / 1000).toFixed(2);
  const score = Math.round((1 - RemainingTime /(targetTime*1000))*100)

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You lost</h2>}
      {!userLost &&<h2>YourScore:{score}</h2>}
      <p>
        The Target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;

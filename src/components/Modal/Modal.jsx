import { useEffect, useState } from "react";
import { Html } from "@react-three/drei";

import "./Modal.css";

const Modal = ({ open, onClose }) => {
  const [dialogue, setDialogue] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/api/dialogue", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setDialogue(data));
  }, []);

  if (!open) return null;
  return (
    <Html className="vn" center={true}>
      <div
        onClick={() => {
          setIndex((i) => i + 1);
          if (index === dialogue.length - 1) {
            setIndex(0);
          }
        }}
      >
        <img src="/images/scene.webp" alt="東北家――イタコときりたん" />
        <div className="msgBox">
          <p className="character">{dialogue[index].character}</p>
          <p className="speech">{dialogue[index].speech}</p>
          <div className="controls">
            <button
              onClick={() => {
                setIndex((i) => i + 1);
                if (index === dialogue.length - 1) {
                  setIndex(0);
                }
              }}
            >
              次へ
            </button>
            <button
              onClick={(e) => {
                if (index > 0) {
                  setIndex((i) => i - 1);
                } else {
                  setIndex(dialogue.length - 1);
                }
                e.stopPropagation();
              }}
            >
              戻る
            </button>
            <button
              onClick={(e) => {
                setIndex(0);
                e.stopPropagation();
              }}
            >
              最初から
            </button>
            <button onClick={onClose}>閉じる</button>
          </div>
        </div>
      </div>
    </Html>
  );
};

export default Modal;

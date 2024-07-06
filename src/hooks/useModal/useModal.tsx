"use client";
import { UseModalProps } from "./useModal.type";

export const useModal = ({
  active,
  visible,
  setActive,
  setVisible,
}: UseModalProps) => {
  const close = () => {
    setVisible(false);
    setTimeout(() => {
      setActive(false);
    }, 300);
  };

  return { active, visible, setActive, setVisible, close };
};

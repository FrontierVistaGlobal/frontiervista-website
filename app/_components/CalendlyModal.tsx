import React from "react";
import { PopupModal } from "react-calendly";

function CalendlyModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <PopupModal
      url="https://calendly.com/info-a8b5"
      rootElement={document.body}
      open={isOpen}
      onModalClose={() => setIsOpen(false)}
    />
  );
}

export default CalendlyModal;

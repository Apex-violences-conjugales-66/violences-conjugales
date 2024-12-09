import { FunctionComponent, useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import ReactPortal from "./ReactPortal";

interface DocumentModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  title: string;
}

const DocumentModal: FunctionComponent<DocumentModalProps> = ({
  children,
  isOpen,
  handleClose,
  title,
}: DocumentModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  //close on Escape key
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);
  //disable scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  //close on click outside modal
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) =>
      modalRef.current && !modalRef.current.contains(e.target as Node)
        ? handleClose()
        : null;
    document.body.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-grey opacity-90 flex" />
        <div
          ref={modalRef}
          className="fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 box-border h-5/6 overflow-hidden p-8 z-50 bg-white"
        >
          <div className="flex justify-between mb-6">
            <h3>{title}</h3>
            <button
              onClick={handleClose}
              className="hover:opacity-65 transition"
            >
              <RxCross2 size={32} />
            </button>
          </div>
          <div className="box-border h-full flex flex-col gap-y-4">
            {children}
          </div>
        </div>
      </>
    </ReactPortal>
  );
};

export default DocumentModal;

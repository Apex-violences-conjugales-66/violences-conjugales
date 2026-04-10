import { Button } from "@/app/ui/Button";
import ReactPortal from "@/app/ui/Modal/ReactPortal";
import { Squircle } from "corner-smoothing";
import { FunctionComponent, useEffect, useRef } from "react";

interface FooterModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  browser: string;
  handleClose: () => void;
}

const FooterModal: FunctionComponent<FooterModalProps> = ({
  children,
  isOpen,
  handleClose,
  browser,
}: FooterModalProps) => {
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
        <Squircle
          ref={modalRef}
          cornerRadius={40}
          className="fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 box-border min-w-fit min-h-fit overflow-hidden p-8 z-50 bg-purple"
        >
          <div className="flex justify-between gap-14 mb-4">
            <h2 className="font-bold">
              Marche à suivre pour <span className="font-black">{browser}</span>
            </h2>
            <Button className="self-end" onClick={handleClose}>
              Fermer
            </Button>
          </div>
          <div className="box-border h-full flex flex-col gap-y-4">
            {children}
          </div>
        </Squircle>
      </>
    </ReactPortal>
  );
};

export default FooterModal;

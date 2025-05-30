import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

type ImageModalProps = {
  src: string;
  alt?: string;
  description?: string;
  onClose: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({
  src,
  alt,
  description,
  onClose,
}) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[9999] backdrop-blur-xs backdrop-brightness-40 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-full mx-4 max-w-4xl p-4 rounded shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="w-full max-h-[80vh] object-contain rounded"
        />
        {description && (
          <p className="mt-4 text-center text-black dark:text-[#FDEBA1] text-lg">
            {description}
          </p>
        )}
      </div>
    </div>,
    document.body
  );
};

export default ImageModal;

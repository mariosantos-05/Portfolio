// filepath: /home/mario/projetos/portfolio/src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  SvgIcon: React.FC<React.SVGProps<SVGSVGElement>>; // Accept an SVG React component
  altText: string; // Ensure this is a non-empty string
}

const Button: React.FC<ButtonProps> = ({ onClick, SvgIcon, altText }) => {
  return (
    <div className="justify-center items center flex flex-col space-y-2">
      <div className="hover:scale-115">
        <button
          onClick={onClick}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
          }}
          aria-label={altText}
        >
          <SvgIcon width="48" height="48" fill="currentColor" />
        </button>
      </div>
      <div>
        <p className="text-center text-[40px] w-[130px] text-black bottom-0 dark:text-[#FDEBA1]">
          {altText}
        </p>
      </div>
    </div>
  );
};

export default Button;

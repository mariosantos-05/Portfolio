// filepath: /home/mario/projetos/portfolio/src/components/Button.tsx
import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>>; // Accept an SVG React component
    altText: string; // Ensure this is a non-empty string
}

const Button: React.FC<ButtonProps> = ({ onClick, SvgIcon, altText }) => {
    return (
        <div>
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
        <div>
            <p className="text-center text-[40px] text-black ">
                {altText}
            </p>
        </div>
        </div>
    );
};

export default Button;
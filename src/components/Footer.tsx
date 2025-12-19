import React from "react";
import {type ColorTheme } from "../config/colors";

interface FooterProps {
    theme: ColorTheme;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
    return (
        <footer
            className="py-8 px-6 text-center"
            style={{
                backgroundColor: theme.surface,
                borderTop: `1px solid ${theme.border}`,
            }}
        >
            <p style={{ color: theme.textSecondary }}>
                Framez - A Portfolio Project © 2025
            </p>
        </footer>
    );
};

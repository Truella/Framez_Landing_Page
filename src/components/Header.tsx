import React from "react";
import { Camera, Moon, Sun } from "lucide-react";
import {type ColorTheme } from "../config/colors";

interface HeaderProps {
    theme: ColorTheme;
    isDark: boolean;
    onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
    theme,
    isDark,
    onToggleTheme,
}) => {
    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
            style={{
                backgroundColor: `${theme.background}cc`,
                borderBottom: `1px solid ${theme.border}`,
            }}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img
                        src="/Framez-logo.png"
                        alt="Framez Logo"
                        className="w-20 object-contain"
                    />
                </div>

                <button
                    onClick={onToggleTheme}
                    className="p-2 rounded-lg transition-colors"
                    style={{
                        backgroundColor: theme.surface,
                        color: theme.textPrimary,
                    }}
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
        </header>
    );
};
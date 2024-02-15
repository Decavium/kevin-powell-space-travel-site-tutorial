interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function LargeButton({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={`large-button uppercase letter-spacing-2 text-dark bg-white ${className}`} style={{ fontFamily: "--ff-serif" }}>
            {children}
        </button>
    )
}
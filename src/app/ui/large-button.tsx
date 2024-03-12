import Link from 'next/link';

interface ButtonProps extends React.LinkHTMLAttributes<HTMLLinkElement> {
    children: React.ReactNode;
}

export default function LargeButton({ children, className }: ButtonProps) {
    return (
        <Link
            href="/destination"
            className={`large-button uppercase letter-spacing-2 text-dark bg-white ${className}`} style={{ fontFamily: "--ff-serif" }}>
            {children}
        </Link>
    )
}
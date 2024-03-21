"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function ProviderBarra({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <ProgressBar
                height="2.5px"
                color="#E74646"
                options={{ showSpinner: false }}
                shallowRouting
            />
            {children}
        </div>
    );
}
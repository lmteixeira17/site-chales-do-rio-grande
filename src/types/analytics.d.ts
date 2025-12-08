declare global {
    interface Window {
        gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
        fbq: (command: string, eventName: string, options?: Record<string, any>) => void;
    }
}
export { };

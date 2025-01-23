const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex flex-row items-center justify-between text-neutral-500 text-lg font-poppins w-full px-2 mt-3">
            <span>{currentYear}</span>
            <span>
                made by{" "}
                <a href="https://github.com/dmslmvsk" className="underline">
                    dmslmvsk
                </a>
            </span>
        </footer>
    );
};

export default Footer;

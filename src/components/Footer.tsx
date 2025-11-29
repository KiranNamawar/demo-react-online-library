import { Github } from "lucide-react";

function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 py-8 text-slate-400">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row">
                    <a
                        href="https://gutendex.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-blue-500"
                    >
                        Data provided by Gutendex API
                    </a>
                    <a
                        href="https://github.com/KiranNamawar/demo-react-online-library"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-colors hover:text-white"
                    >
                        <Github className="h-5 w-5" />
                        <span>GitHub</span>
                    </a>
            </div>
        </footer>
    );
}

export default Footer;

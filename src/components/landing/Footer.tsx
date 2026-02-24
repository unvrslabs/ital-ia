import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-border/30">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-foreground font-bold text-sm">
            UNVRS·<span className="text-primary">ital</span>IA
          </span>
          <p className="text-muted-foreground text-sm flex items-center gap-1.5">
            Sviluppato con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> da{" "}
            <a
              href="https://www.unvrslabs.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Unvrs Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-border/50 bg-background/50 backdrop-blur-xl mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <p className="text-sm text-muted-foreground">
          Void Icons are built on the incredible open-source foundation of{" "}
          <a
            href="https://lucide.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:text-primary transition-colors underline underline-offset-4"
          >
            Lucide
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;

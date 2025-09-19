const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }
    
    return (
        <footer className="bg-accent w-full gap-1 p-8">
            <p className="text-cs font-medium">© {getYear()} Copyright BEWEAR</p>
            <p className="text-muted-foreground text-xs font-medium">Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer;
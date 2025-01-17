import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-background shadow-md mt-8">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold text-primary">
              EcommerceApp
            </Link>
            <p className="mt-2 text-sm text-foreground">
              © 2023 EcommerceApp. Todos os direitos reservados.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Link
              to="/sobre"
              className="text-foreground hover:text-primary text-sm"
            >
              Sobre
            </Link>
            <Link
              to="/termos"
              className="text-foreground hover:text-primary text-sm"
            >
              Termos de Uso
            </Link>
            <Link
              to="/privacidade"
              className="text-foreground hover:text-primary text-sm"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/contato"
              className="text-foreground hover:text-primary text-sm"
            >
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

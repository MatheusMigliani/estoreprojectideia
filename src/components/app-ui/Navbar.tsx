import { useState } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Button } from "./Button";
import { useTheme } from "../theme-provider";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: "/", label: "Início" },
    { path: "/produtos", label: "Produtos" },
    { path: "/vender", label: "Vender" },
  ];

  return (
    <nav className="bg-background shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              EcommerceApp
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium relative"
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="underline"
                      initial={false}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button onClick={toggleTheme} variant="outline" size="sm">
                  {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="md:hidden">
            <Button onClick={toggleMenu} variant="outline" size="sm">
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="sm"
              className="w-full justify-start"
            >
              {theme === "light" ? (
                <Moon size={18} className="mr-2" />
              ) : (
                <Sun size={18} className="mr-2" />
              )}
              {theme === "light" ? "Modo Escuro" : "Modo Claro"}
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Поехали!</h3>
            <p className="text-foreground/70 mb-4">
              Создавайте современные веб-приложения быстро и легко
            </p>
            <p className="text-sm text-foreground/60">
              © 2025 Поехали.dev. Все права защищены.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-foreground/70 hover:text-primary transition-colors">Возможности</Link></li>
              <li><Link to="/pricing" className="text-foreground/70 hover:text-primary transition-colors">Цены</Link></li>
              <li><Link to="/docs" className="text-foreground/70 hover:text-primary transition-colors">Документация</Link></li>
              <li><Link to="/updates" className="text-foreground/70 hover:text-primary transition-colors">Обновления</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">О нас</Link></li>
              <li><Link to="/careers" className="text-foreground/70 hover:text-primary transition-colors">Карьера</Link></li>
              <li><Link to="/blog" className="text-foreground/70 hover:text-primary transition-colors">Блог</Link></li>
              <li><Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Правовая информация</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-foreground/70 hover:text-primary transition-colors">Конфиденциальность</Link></li>
              <li><Link to="/terms" className="text-foreground/70 hover:text-primary transition-colors">Условия использования</Link></li>
              <li><Link to="/cookies" className="text-foreground/70 hover:text-primary transition-colors">Политика cookies</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

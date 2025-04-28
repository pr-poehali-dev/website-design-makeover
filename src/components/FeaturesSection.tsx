import { 
  Layout, 
  Zap, 
  Shield, 
  Palette
} from "lucide-react";

const features = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Современный дизайн",
    description: "Создавайте стильные и отзывчивые интерфейсы с помощью предустановленных компонентов"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Молниеносная скорость",
    description: "Оптимизированная производительность для быстрой загрузки и отзывчивого интерфейса"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Надежная защита",
    description: "Встроенные механизмы безопасности для защиты ваших данных и пользователей"
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Кастомизация",
    description: "Легко настраивайте внешний вид под свой бренд с гибкими инструментами"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши возможности</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Все необходимые инструменты для создания современных веб-приложений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-background rounded-lg p-6 border border-border/60 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-primary/10 text-primary rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-primary/10 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Запусти свой сайт за минуту
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            Создавайте современные веб-приложения быстро и легко с помощью нашей интуитивно понятной платформы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Начать бесплатно <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Узнать больше
            </Button>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="relative mx-auto max-w-5xl animate-fade-in">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-background">
            <img
              src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=2070&auto=format&fit=crop"
              alt="Интерфейс платформы"
              className="w-full"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            🚀 Новая версия доступна!
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

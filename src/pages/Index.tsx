import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9b87f5] via-[#7E69AB] to-[#9b87f5] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-5xl space-y-16 animate-fade-in">
          <div className="text-center space-y-8">
            <h1 className="text-8xl md:text-[12rem] font-bold text-black leading-none" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Дельта OS
            </h1>
            
            <div className="flex items-center justify-center gap-4 max-w-3xl mx-auto">
              <div className="h-24 flex-1 bg-[#9b87f5] border-4 border-black"></div>
              <div className="h-24 w-24 bg-black border-4 border-black"></div>
              <div className="h-24 flex-1 bg-[#9b87f5] border-4 border-black"></div>
            </div>
          </div>

          <div id="download" className="space-y-8 max-w-2xl mx-auto">
            <h2 className="text-5xl font-bold text-black text-center" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Delta OS recoded download
            </h2>
            
            <div className="space-y-4">
              <Button 
                className="w-full h-16 text-2xl font-bold bg-black text-[#9b87f5] hover:bg-[#000000e6] border-4 border-black transition-all hover:scale-105"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                <Icon name="Download" size={32} className="mr-3" />
                Скачать для Windows
              </Button>
              
              <Button 
                className="w-full h-16 text-2xl font-bold bg-black text-[#9b87f5] hover:bg-[#000000e6] border-4 border-black transition-all hover:scale-105"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                <Icon name="Download" size={32} className="mr-3" />
                Скачать для macOS
              </Button>
              
              <Button 
                className="w-full h-16 text-2xl font-bold bg-black text-[#9b87f5] hover:bg-[#000000e6] border-4 border-black transition-all hover:scale-105"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                <Icon name="Download" size={32} className="mr-3" />
                Скачать для Linux
              </Button>
            </div>

            <div className="bg-black border-4 border-black p-8 mt-8">
              <div className="space-y-4 text-[#9b87f5]" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="mt-1 flex-shrink-0" />
                  <p className="text-lg">Полностью переписанная версия</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="mt-1 flex-shrink-0" />
                  <p className="text-lg">Новый игровой движок</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="mt-1 flex-shrink-0" />
                  <p className="text-lg">Улучшенная графика и производительность</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="mt-1 flex-shrink-0" />
                  <p className="text-lg">Кросс-платформенность</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-8 text-center">
        <p className="text-black text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>
          © 2025 Delta OS recoded
        </p>
      </footer>
    </div>
  );
};

export default Index;

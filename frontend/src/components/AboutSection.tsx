
export const AboutSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 lg:pr-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#042256] mb-6 leading-tight">
              Мы — команда экспертов в <span className="underline decoration-blue-400">no-code</span> и автоматизации.
            </h2>
            
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-[#042256]">Мы не просто внедряем технологии</strong>, а 
                находим точки роста, погружаясь в 
                бизнес клиента.
              </p>
              
              <p>
                <strong className="text-[#042256]">Создаём решения, которые избавляют 
                от рутины</strong>, ускоряют процессы и 
                улучшают клиентский опыт.
              </p>
              
              <p>
                <strong className="text-[#042256]">Автоматизация — это не будущее</strong>, а 
                уже настоящее. И мы поможем 
                бизнесу быть на шаг впереди.
              </p>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="flex-1 lg:flex-none lg:w-1/2 flex justify-center">
            <img 
              src="5.svg" 
              alt="Team automation experts illustration" 
              className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
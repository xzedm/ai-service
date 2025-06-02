import React, { useState } from 'react';

interface FormData {
  fullName: string;
  whatsapp: string;
  email: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    whatsapp: '',
    email: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

const handleSubmit = async () => {
  setIsSubmitting(true);
  setError('');
  
  // Basic validation
  if (!formData.fullName.trim() || !formData.whatsapp.trim() || !formData.email.trim()) {
    setError('Пожалуйста, заполните все поля');
    setIsSubmitting(false);
    return;
  }
  
  try {
    // Update this URL to point to your Express server
    const response = await fetch('http://localhost:5000/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit form');
    }

    console.log('Form submitted successfully:', result);
    setIsSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ fullName: '', whatsapp: '', email: '' });
    }, 3000);
    
  } catch (err) {
    console.error('Form submission error:', err);
    setError('Произошла ошибка при отправке формы. Попробуйте еще раз.');
  } finally {
    setIsSubmitting(false);
  }
};

  const handleOpenLink = () => {
    window.open('https://wa.me/77476995931?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%B2%D0%B0%D1%88%D0%B8%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8%20%D0%BF%D0%BE%20%D0%98%D0%98%20%D0%B1%D0%BE%D1%82%D0%B0%D0%BC', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-xs sm:max-w-xl mx-auto mt-10 mb-10">
        {/* Main Form Container */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-2xl border border-white/20">
          <h1 className="text-lg sm:text-xl font-bold text-white text-center mb-4 sm:mb-6">
            Свяжитесь с нами
          </h1>
          
          <div className="space-y-3 sm:space-y-4">
            {/* Full Name Input */}
            <div className="relative">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="ФИО"
                required
                className="w-full px-3 py-2 sm:py-2.5 text-sm rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-white/25"
              />
            </div>

            {/* WhatsApp Input */}
            <div className="relative">
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                placeholder="Whatsapp"
                required
                className="w-full px-3 py-2 sm:py-2.5 text-sm rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 hover:bg-white/25"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Почта"
                required
                className="w-full px-3 py-2 sm:py-2.5 text-sm rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/25"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-400 text-sm text-center bg-red-500/10 rounded-lg p-2 border border-red-500/20">
                {error}
              </div>
            )}

            {/* Submit Button with Cool Effects */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting || isSuccess}
              className={`
                relative w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-white text-sm sm:text-base
                transition-all duration-500 transform
                ${isSuccess 
                  ? 'bg-green-600 scale-105' 
                  : isSubmitting 
                    ? 'bg-blue-500 scale-95' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25'
                }
                focus:outline-none focus:ring-4 focus:ring-blue-300/50
                active:scale-95
                disabled:cursor-not-allowed
                overflow-hidden
                group
              `}
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center justify-center">
                {isSuccess ? (
                  <>
                    <svg className="w-6 h-6 mr-2 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Отправлено!
                  </>
                ) : isSubmitting ? (
                  <>
                    <svg className="w-6 h-6 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Отправка...
                  </>
                ) : (
                  'Отправить'
                )}
              </span>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-active:opacity-100 group-active:animate-ping bg-white/20"></div>
            </button>
          </div>
        </div>

        {/* Info Text */}
        <div className="mt-3 sm:mt-4 text-center text-white/80 text-lg leading-tight max-w-xl mx-auto px-2">
          <p className="mb-1">
            <span className="font-medium">Хотите обсудить проект?</span>
          </p>
          <p className="mb-1">
            Свяжитесь с нами — подберем оптимальное решение под ваши задачи.
          </p>
          <p>
            Оставьте заявку, и мы предложим эффективный путь автоматизации именно для вашего бизнеса.
          </p>
        </div>

        <div className='text-center flex justify-center pt-5'>
          <button className='rounded bg-green-600 p-4 text-white flex cursor-pointer hover:scale-105 hover:transition hover:duration-300 transition duration-300'
          onClick={handleOpenLink}
          >
            Свяжитесь через Whatsapp 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                  fill="#ffffff" viewBox="0 0 24 24" >
                  <path fillRule="evenodd" d="M18.403 5.633A8.92 8.92 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a9 9 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.93 8.93 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.45 7.45 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.45 7.45 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.41 7.41 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73s-.354-.112-.504.112-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393s.149-.224.224-.374.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a10 10 0 0 0-.429-.008.83.83 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321s1.582 2.415 3.832 3.387c.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066s.187-.973.131-1.067-.207-.151-.43-.263" clipRule="evenodd"></path>
            </svg> 
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-2 -left-2 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default ContactForm;
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <div className="flex bg-gray-100 rounded-full p-1">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            language === 'en'
              ? 'bg-white text-purple-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('nl')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            language === 'nl'
              ? 'bg-white text-purple-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          NL
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;
import React from 'react';
import type { License, LicenseFeature } from '../types';
import { CheckIcon } from './icons/CheckIcon';
import { CrossIcon } from './icons/CrossIcon';

const FeatureItem: React.FC<{ feature: LicenseFeature, theme: 'light' | 'dark' }> = ({ feature, theme }) => {
  const textColor = theme === 'light' 
    ? (feature.included ? (feature.highlight ? 'text-yellow-500' : 'text-black') : 'text-gray-400 line-through')
    : (feature.included ? (feature.highlight ? 'text-yellow-300' : 'text-gray-100') : 'text-gray-500 line-through');
  
  const iconColor = theme === 'light' ? (feature.included ? 'text-black' : 'text-gray-400') : (feature.included ? 'text-white' : 'text-gray-500');

  return (
    <div className="flex items-center space-x-3 py-2 border-b border-gray-200/20 last:border-b-0">
      <div className={`w-4 h-4 flex-shrink-0 ${iconColor}`}>
        {feature.included ? <CheckIcon /> : <CrossIcon />}
      </div>
      <span className={`flex-1 text-left text-sm ${textColor}`}>{feature.text}</span>
    </div>
  );
};

const PricingCard: React.FC<{ license: License }> = ({ license }) => {
  const isDark = license.theme === 'dark';
  
  return (
    <div className={`relative flex flex-col p-6 rounded-lg transition-transform duration-300 hover:scale-105
      ${isDark ? 'bg-[#0a0a0a] text-white shadow-2xl' : 'bg-white text-black border border-gray-200/50 shadow-lg'}`}>
      
      {license.isPopular && (
        <div className="absolute top-4 -right-2 bg-black text-yellow-300 text-xs font-bold px-3 py-1 rounded-md transform rotate-[0deg] -translate-x-1/2">
          POPULAR!
        </div>
      )}

      {license.isBestDeal && (
        <div className="absolute top-0 left-0 right-0 py-2 bg-black text-center text-sm font-semibold">
        </div>
      )}
      
      <div className="flex-grow">
        <h5 className={`font-semibold text-2xl ${isDark ? 'text-gray-100' : 'text-black'}`}>{license.name}</h5>
        
        <div className="my-4">
          <h3 className={`font-instrument-sans font-bold text-5xl ${isDark ? 'text-white' : 'text-black'}`}>
            ${license.price}
          </h3>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{license.priceSuffix}</p>
        </div>

        <div className="space-y-2">
          {license.features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} theme={license.theme} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <button className={`w-full py-2 px-4 rounded-md text-sm font-semibold border transition-colors duration-300
          ${isDark ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}>
          Why pick this license?
        </button>
      </div>
    </div>
  );
};

export default PricingCard;

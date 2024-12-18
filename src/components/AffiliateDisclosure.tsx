import React from 'react';
import { DollarSign, ExternalLink } from 'lucide-react';

export default function AffiliateDisclosure() {
  return (
    <section className="bg-amber-50 rounded-lg p-6 border border-amber-200">
      <div className="flex items-start gap-3">
        <DollarSign className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-amber-900">Affiliate Disclosure</h3>
          
          <div className="space-y-3 text-amber-900">
            <p>
              The Darakaraka Calculator website contains affiliate links. This means we may earn a commission if you click on certain links and make a purchase, at no additional cost to you.
            </p>
            
            <p>
              We only recommend products and services that we believe will add value to our users. Our affiliate partnerships help support the maintenance and development of this free calculator tool.
            </p>
            
            <div className="flex items-center gap-2 text-sm bg-amber-100 p-3 rounded-lg">
              <ExternalLink className="w-4 h-4" />
              <p>
                Links marked with an asterisk (*) or presented in promotional banners are affiliate links.
              </p>
            </div>
            
            <p>
              While we may receive compensation for these recommendations, this does not influence our calculations, advice, or content. Our primary goal is to provide accurate astrological insights and valuable resources to our users.
            </p>
            
            <p className="text-sm">
              For more information about how we select and evaluate products, please see our{' '}
              <a href="/privacy" className="text-amber-700 hover:text-amber-800 underline">
                Privacy Policy
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
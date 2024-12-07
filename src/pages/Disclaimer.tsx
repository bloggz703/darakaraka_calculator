import React from 'react';

export default function Disclaimer() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
        
        <div className="prose max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Astrological Calculations</h2>
            <p>The Darakaraka calculations provided on this website are based on traditional Vedic astrology principles. While we strive for accuracy, astrological interpretations should not be the sole basis for making life decisions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Accuracy of Results</h2>
            <p>The accuracy of your Darakaraka calculation depends on the accuracy of the planetary degrees you input. We recommend cross-referencing your birth chart data with reliable sources.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Professional Advice</h2>
            <p>Our calculator is a tool for guidance and should not be considered as professional career counseling. For important career decisions, we recommend consulting with qualified career counselors or professionals.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p>The Darakaraka Calculator shall not be liable for any decisions made or actions taken based on the calculations or information provided on this website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Updates to Calculator</h2>
            <p>We reserve the right to modify, update, or discontinue any aspect of our calculator at any time without notice.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
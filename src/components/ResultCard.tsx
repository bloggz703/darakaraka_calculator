import React from 'react';
import { Download, Share2, Star, Activity, Compass } from 'lucide-react';
import { generatePDF, downloadPDF, shareResults } from '../utils/pdfGenerator';

interface ResultCardProps {
  result: {
    planet: string;
    sign: string;
    house: number;
    interpretation: string;
    aspects: Array<{
      planet: string;
      aspect: string;
      interpretation: string;
    }>;
    birthDetails: {
      date: string;
      time: string;
      place: string;
    };
  };
}

export default function ResultCard({ result }: ResultCardProps) {
  const handleDownload = async () => {
    const element = document.getElementById('darakaraka-result');
    if (element) {
      const pdfDataUri = await generatePDF(element);
      downloadPDF(pdfDataUri, 'darakaraka-analysis.pdf');
    }
  };

  const handleShare = () => {
    shareResults(result);
  };

  return (
    <div id="darakaraka-result" className="mt-8 space-y-6">
      <div className="bg-indigo-50 p-6 rounded-lg">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-semibold">Your Darakaraka Analysis</h3>
          <div className="flex gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-gray-50 transition-colors border"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-gray-50 transition-colors border"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-indigo-600" />
              <h4 className="font-semibold">Darakaraka Planet</h4>
            </div>
            <p className="text-lg text-indigo-600">{result.planet}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Compass className="w-5 h-5 text-indigo-600" />
              <h4 className="font-semibold">Sign</h4>
            </div>
            <p className="text-lg text-indigo-600">{result.sign}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5 text-indigo-600" />
              <h4 className="font-semibold">House Position</h4>
            </div>
            <p className="text-lg text-indigo-600">{result.house}th House</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg mb-6">
          <h4 className="text-lg font-semibold mb-3">Primary Interpretation</h4>
          <p className="text-gray-700 leading-relaxed">{result.interpretation}</p>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Planetary Aspects</h4>
          <div className="space-y-4">
            {result.aspects.map((aspect, index) => (
              <div key={index} className="p-4 bg-indigo-50 rounded-lg">
                <h5 className="font-medium text-indigo-900 mb-2">
                  {aspect.planet} - {aspect.aspect}
                </h5>
                <p className="text-gray-700">{aspect.interpretation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          <p>Birth Details:</p>
          <p>Date: {result.birthDetails.date}</p>
          <p>Time: {result.birthDetails.time}</p>
          <p>Place: {result.birthDetails.place}</p>
        </div>
      </div>
    </div>
  );
}
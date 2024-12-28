import React from 'react';

declare global {
  interface Window {
    atOptions: {
      key: string;
      format: string;
      height: number;
      width: number;
      params: Record<string, unknown>;
    };
  }
}

export default function AdUnit() {
  React.useEffect(() => {
    // Set global atOptions
    window.atOptions = {
      'key': '31eea8f2952850a78f6c8ba8b8479f9a',
      'format': 'iframe',
      'height': 250,
      'width': 300,
      'params': {}
    };

    // Create and load the ad script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.highperformanceformat.com/31eea8f2952850a78f6c8ba8b8479f9a/invoke.js';
    script.async = true;
    
    // Add script to document
    document.getElementById('ad-container')?.appendChild(script);
    
    // Cleanup on unmount
    return () => {
      const container = document.getElementById('ad-container');
      if (container && container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex justify-center my-8">
      <div id="ad-container" className="w-[300px] h-[250px]" />
    </div>
  );
}
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export async function generatePDF(element: HTMLElement): Promise<string> {
  const canvas = await html2canvas(element, {
    scale: 2,
    logging: false,
    useCORS: true
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

  // Return base64 string of PDF
  return pdf.output('datauristring');
}

export function downloadPDF(pdfDataUri: string, filename: string) {
  const link = document.createElement('a');
  link.href = pdfDataUri;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function shareResults(result: any) {
  if (navigator.share) {
    navigator.share({
      title: 'My Darakaraka Analysis',
      text: `My Darakaraka is ${result.planet} in ${result.sign}. Check out my detailed analysis!`,
      url: window.location.href
    }).catch((error) => console.log('Error sharing:', error));
  } else {
    // Fallback for browsers that don't support Web Share API
    const text = `My Darakaraka is ${result.planet} in ${result.sign}`;
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('Results copied to clipboard!');
  }
}
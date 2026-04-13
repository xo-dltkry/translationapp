
import React, { useState } from 'react';
import { Copy, Download, RotateCcw, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

function TranslationResults({ result, onNewTranslation }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (result.translatedText) {
      await navigator.clipboard.writeText(result.translatedText);
      setCopied(true);
      toast('Text copied to clipboard');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (result.translatedFile) {
      const byteCharacters = atob(result.translatedFile);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: result.mimeType });
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = result.fileName || 'translated-document';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast('File downloaded successfully');
    } else if (result.translatedText) {
      const blob = new Blob([result.translatedText], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'translation.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast('Text downloaded as file');
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Translation result</CardTitle>
        </CardHeader>
        <CardContent>
          {result.translatedText && (
            <div className="bg-muted rounded-lg p-6">
              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                {result.translatedText}
              </p>
            </div>
          )}
          
          {result.translatedFile && (
            <div className="bg-muted rounded-lg p-6 text-center">
              <p className="text-sm font-medium mb-2">File translated successfully</p>
              <p className="text-sm text-muted-foreground">{result.fileName}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-3">
        {result.translatedText && (
          <Button
            variant="outline"
            onClick={handleCopy}
            className="transition-all duration-200"
          >
            {copied ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                Copy text
              </>
            )}
          </Button>
        )}
        
        <Button
          variant="outline"
          onClick={handleDownload}
          className="transition-all duration-200"
        >
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
        
        <Button
          onClick={onNewTranslation}
          className="transition-all duration-200 active:scale-[0.98]"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          New translation
        </Button>
      </div>
    </div>
  );
}

export default TranslationResults;

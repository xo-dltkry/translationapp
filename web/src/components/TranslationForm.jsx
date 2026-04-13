
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import DocumentUpload from './DocumentUpload';
import LanguageSelector from './LanguageSelector';
import TranslationResults from './TranslationResults';
import apiServerClient from '@/lib/apiServerClient';
import { toast } from 'sonner';

function TranslationForm() {
  const [activeTab, setActiveTab] = useState('text');
  const [selectedFile, setSelectedFile] = useState(null);
  const [textInput, setTextInput] = useState('');
  const [selectedPair, setSelectedPair] = useState('kk-ru');
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationResult, setTranslationResult] = useState(null);

  const languagePairs = {
    'kk-ru': { source: 'kk', target: 'ru' },
    'ru-kk': { source: 'ru', target: 'kk' },
  };

  const getLanguages = () => {
    const pair = languagePairs[selectedPair];
    return { source: pair.source, target: pair.target };
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
  };

  const handleTranslate = async () => {
    if (activeTab === 'file' && !selectedFile) {
      toast('Please select a file to translate');
      return;
    }

    if (activeTab === 'text' && !textInput.trim()) {
      toast('Please enter text to translate');
      return;
    }

    setIsTranslating(true);

    try {
      const formData = new FormData();
      const { source, target } = getLanguages();
      
      formData.append('sourceLanguage', source);
      formData.append('targetLanguage', target);

      if (activeTab === 'file') {
        formData.append('file', selectedFile);
      } else {
        formData.append('inputText', textInput);
      }

      const response = await apiServerClient.fetch('/translate', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Translation failed');
      }

      const data = await response.json();
      setTranslationResult(data);
      toast('Translation completed successfully');
    } catch (error) {
      console.error('Translation error:', error);
      toast('Translation failed. Please try again.');
    } finally {
      setIsTranslating(false);
    }
  };

  const handleNewTranslation = () => {
    setTranslationResult(null);
    setSelectedFile(null);
    setTextInput('');
  };

  return (
    <div className="space-y-8">
      <LanguageSelector
        selectedPair={selectedPair}
        onPairChange={setSelectedPair}
      />

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="text">Text input</TabsTrigger>
          <TabsTrigger value="file">File upload</TabsTrigger>
        </TabsList>

        <TabsContent value="text" className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="text-input">Enter text to translate</Label>
            <Textarea
              id="text-input"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Type or paste your text here..."
              className="min-h-[200px] text-foreground"
            />
          </div>
        </TabsContent>

        <TabsContent value="file" className="space-y-4 mt-6">
          <DocumentUpload
            onFileSelect={handleFileSelect}
            selectedFile={selectedFile}
            onFileRemove={handleFileRemove}
          />
        </TabsContent>
      </Tabs>

      <Button
        onClick={handleTranslate}
        disabled={isTranslating}
        className="w-full transition-all duration-200 active:scale-[0.98]"
        size="lg"
      >
        {isTranslating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Translating...
          </>
        ) : (
          'Translate'
        )}
      </Button>

      {translationResult && (
        <div className="pt-2">
          <TranslationResults
            result={translationResult}
            onNewTranslation={handleNewTranslation}
          />
        </div>
      )}
    </div>
  );
}

export default TranslationForm;

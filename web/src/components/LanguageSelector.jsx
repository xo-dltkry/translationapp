
import React from 'react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/context/LanguageContext';

function LanguageSelector({ selectedPair, onPairChange }) {
  const { t } = useLanguage();

  const languagePairs = [
    { id: 'kk-ru', source: t('languageSelector.kazakh'), target: t('languageSelector.russian') },
    { id: 'ru-kk', source: t('languageSelector.russian'), target: t('languageSelector.kazakh') },
  ];

  return (
    <div className="space-y-2">
      <Label className="text-base font-semibold block">{t('translationForm.selectPair')}</Label>
      <Select value={selectedPair} onValueChange={onPairChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={t('translationForm.choosePair')} />
        </SelectTrigger>
        <SelectContent>
          {languagePairs.map((pair) => (
            <SelectItem key={pair.id} value={pair.id}>
              {pair.source} → {pair.target}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default LanguageSelector;

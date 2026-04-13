
import React from 'react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function LanguageSelector({ selectedPair, onPairChange }) {
  const languagePairs = [
    { id: 'kk-ru', source: 'Kazakh', target: 'Russian', sourceCode: 'kk', targetCode: 'ru' },
    { id: 'ru-kk', source: 'Russian', target: 'Kazakh', sourceCode: 'ru', targetCode: 'kk' },
  ];

  return (
    <div className="space-y-2">
      <Label className="text-base font-semibold block">Select language pair</Label>
      <Select value={selectedPair} onValueChange={onPairChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Choose language pair" />
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

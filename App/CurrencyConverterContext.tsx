import React, {createContext, useState} from 'react';

type CurrencyUpdateAction = (currency: string) => void;

type CurrencyContextType = {
  baseCurrency: string;
  quoteCurrency: string;
  setBaseCurrency: CurrencyUpdateAction | null;
  setQuoteCurrency: CurrencyUpdateAction | null;
  swapCurrencies: (() => void) | null;
};

const ConversionContext = createContext<CurrencyContextType>({
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  setBaseCurrency: null,
  setQuoteCurrency: null,
  swapCurrencies: null,
});

export const ConversionContextProvider: React.FC = ({children}) => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [quoteCurrency, setQuoteCurrency] = useState('GBP');

  function swapCurrencies(): void {
    setQuoteCurrency(baseCurrency);
    setBaseCurrency(quoteCurrency);
  }

  const context = {
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
    swapCurrencies,
  };

  return (
    <ConversionContext.Provider value={context}>
      {children}
    </ConversionContext.Provider>
  );
};

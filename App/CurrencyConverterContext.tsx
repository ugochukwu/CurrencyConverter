import React, {createContext, useState} from 'react';
import {api, ExchangeRates, ExchangeRateResponse} from './api';

export type CurrencyUpdateAction = (currency: string) => void;

type CurrencyContextType = {
  baseCurrency: string;
  quoteCurrency: string;
  setBaseCurrency: CurrencyUpdateAction;
  setQuoteCurrency: CurrencyUpdateAction;
  exchangeRate: ExchangeRates;
  swapCurrencies: () => void;
};

export const ConversionContext = createContext<CurrencyContextType>({
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  exchangeRate: new Map<string, number>(),
  setBaseCurrency: () => {},
  setQuoteCurrency: () => {},
  swapCurrencies: () => {},
});

export const ConversionContextProvider: React.FC = ({children}) => {
  const [baseCurrency, _setBaseCurrency] = useState('USD');
  const [quoteCurrency, setQuoteCurrency] = useState('GBP');
  const [exchangeRate, setExchangeRate] = useState(new Map<string, number>());

  updateExchangeRates(baseCurrency);

  const setBaseCurrency = (currency: string) => {
    _setBaseCurrency(currency);
    updateExchangeRates(currency);
  };

  function swapCurrencies(): void {
    setQuoteCurrency(baseCurrency);
    setBaseCurrency(quoteCurrency);
  }

  function updateExchangeRates(currency: string) {
    api(`/latest?base=${currency}`).then((result: ExchangeRateResponse) => {
      setExchangeRate(result.rates);
    });
  }

  const context = {
    baseCurrency,
    quoteCurrency,
    exchangeRate,
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

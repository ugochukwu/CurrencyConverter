import React, {createContext, useEffect, useState} from 'react';
import {api, ExchangeRates, ExchangeRateResponse} from './api';

export type CurrencyUpdateAction = (currency: string) => void;

type CurrencyContextType = {
  baseCurrency: string;
  quoteCurrency: string;
  setBaseCurrency: CurrencyUpdateAction;
  setQuoteCurrency: CurrencyUpdateAction;
  exchangeRate: ExchangeRates;
  swapCurrencies: () => void;
  date: Date;
};

export const ConversionContext = createContext<CurrencyContextType>({
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  exchangeRate: new Map<string, number>(),
  setBaseCurrency: () => {},
  setQuoteCurrency: () => {},
  swapCurrencies: () => {},
  date: new Date(),
});

export const ConversionContextProvider: React.FC = ({children}) => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [quoteCurrency, setQuoteCurrency] = useState('GBP');
  const [exchangeRate, setExchangeRate] = useState(new Map<string, number>());
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    updateExchangeRateInfo(baseCurrency);
  }, [baseCurrency]);

  function swapCurrencies(): void {
    setQuoteCurrency(baseCurrency);
    setBaseCurrency(quoteCurrency);
  }

  function updateExchangeRateInfo(currency: string) {
    api(`/latest?base=${currency}`).then((result: ExchangeRateResponse) => {
      console.log(result);
      setExchangeRate(result.rates);
      setDate(new Date(result.date));
    });
  }

  const context = {
    baseCurrency,
    quoteCurrency,
    exchangeRate,
    setBaseCurrency,
    setQuoteCurrency,
    swapCurrencies,
    date,
  };

  return (
    <ConversionContext.Provider value={context}>
      {children}
    </ConversionContext.Provider>
  );
};

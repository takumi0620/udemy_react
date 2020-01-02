import {createContext} from 'react';

// providerからcomponentへ渡す値受け取るためのクラス???
// const CounterContext = createContext({age:10});のようなデフォルト値を与えることができる
const CounterContext = createContext();

export default CounterContext;
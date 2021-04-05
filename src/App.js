import './App.css';
import store from './store/store'
import { Provider } from 'react-redux'
import Header from './components/header/Header'


function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>

  );
}

export default App;

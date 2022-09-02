import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../src/assets/scss/style.scss';
import AppCover from '../src/AppCover'
import { Provider } from 'react-redux';
import store from '../store/index'
import "../src/App.css"

function MyApp({ Component, pageProps }) {
  return (<Provider store={store}>
    <AppCover app={<Component {...pageProps} />} />
  </Provider>)
}

export default MyApp

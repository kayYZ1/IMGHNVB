import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import fileStore from './redux/stores/fileStore.ts'
import userStore from "./redux/stores/userStore.ts"
import App from './App.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Provider store={userStore}>
      <Provider store={fileStore}>
        <App />
      </Provider>
    </Provider>
  </Router>
)

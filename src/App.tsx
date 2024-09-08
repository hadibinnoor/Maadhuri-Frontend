import FireBaseProvider from './contexts/firebase.context'
import { GlobalStyles } from './Global.styled'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './pages/Test/Test.page';
import { ThemeProvider } from 'styled-components';
import { theme2 } from './data/theme';
import Login from './pages/Login/Login';
import Validate from './pages/Validate/Validate';
import DataProvider from './contexts/data.context';
import Protected from './components/Protected/Protected';
import Content from './pages/Content/Content';
import AlertProvider from './contexts/alert.context';

function App() {

	return (
		<ThemeProvider theme={theme2}>
			<FireBaseProvider>
				<DataProvider>
					<AlertProvider>
						<BrowserRouter>
							<GlobalStyles />
							<Routes>
								<Route path='/test' element={<Test />} />
								<Route path='/' element={<Login />} />
								<Route path='/validate' element={<Protected><Validate /></Protected>} />
								<Route path='/content' element={<Content />} />
							</Routes>
						</BrowserRouter>
					</AlertProvider>
				</DataProvider>
			</FireBaseProvider>
		</ThemeProvider>
	)
}

export default App

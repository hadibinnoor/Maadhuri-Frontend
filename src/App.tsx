import FireBaseProvider from './contexts/firebase.context'
import { GlobalStyles } from './Global.styled'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './pages/Test/Test.page';
import { ThemeProvider } from 'styled-components';
import { theme } from './data/theme';
import Login from './pages/Login/Login';
import Validate from './pages/Validate/Validate';

function App() {

	return (
		<ThemeProvider theme={theme}>
			<FireBaseProvider>
				<BrowserRouter>
					<GlobalStyles />
					<Routes>
						<Route path='/test' element={<Test />} />
						<Route path='/' element={<Login />} />
						<Route path='/validate' element={<Validate />} />
					</Routes>
				</BrowserRouter>
			</FireBaseProvider>
		</ThemeProvider>
	)
}

export default App

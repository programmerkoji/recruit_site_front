import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Mv } from "./components/molecules/mv/Mv";
import { AppRouter } from "./components/router/AppRouter";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Mv />
				<AppRouter />
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;

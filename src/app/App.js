import React from "react";
import "./App.scss";
import HomePage from "./components/homePage/homePage";
import { StoreProvider } from "./store/StoreContext";
function App() {
	return (
		<div className='App'>
			<StoreProvider>
				<HomePage />
			</StoreProvider>
		</div>
	);
}

export default App;

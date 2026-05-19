import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage.jsx";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/admin" element={<AdminDashboardPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

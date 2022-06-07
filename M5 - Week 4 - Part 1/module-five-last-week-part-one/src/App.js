import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Login from "./components/Login";

function App() {
	const [search, setSearch] = useState("");

	return (
		<BrowserRouter>
			<NavBar search={search} setSearch={setSearch} />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<MyBadge title="Welcome to the BookStore" color="danger" />{" "}
							<BookList search={search} />
						</>
					}
				/>
				<Route path="/BookDetails/:bookId" element={<BookDetails />} />
				<Route path="/Login" element={<Login />}></Route>
				<Route element={<NotFound />} path="*" />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

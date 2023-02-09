import "./App.css";

import { Input } from "./components/Input";

function App() {
	return (
		<div className="app">
			<h1>Inputs</h1>
			<div className="box">
				<h4>Default</h4>
				<Input label="label" />
			</div>
			<div className="box">
				<h4>Error</h4>
				<Input error />
			</div>
			<div className="box">
				<h4>Disabled</h4>
				<Input disabled />
			</div>
			<div className="box">
				<h4>Helper text</h4>
				<Input label="label" helperText="You need to add..." />
				<Input label="label" error helperText="You need to add..." />
			</div>
			<div className="box">
				<h4>Icons</h4>
				<Input startIcon="call" helperText="excuse me" />
				<Input endIcon="lock" value="Default value" />
			</div>

			<div className="box">
				<h4>Sizes</h4>
				<Input format='sm' />
				<Input format='md' />
			</div>

			<div className="box">
				<h4>fullWidth</h4>
				<Input fullWidth />
			</div>

			<div className="box">
				<h4>multiline</h4>
				<Input multiline />
			</div>

			<footer className="footer">
				<div>To see the Icons you need to add the google fonts link</div>
				<div className="footer__ref">
					<span>Made by Wenanoshe</span>
					<a href="https://github.com/wenanoshe">
						<span>Github</span>
						<span className="material-symbols-rounded icon">
							family_history
						</span>
					</a>
				</div>
			</footer>
		</div>
	);
}

export default App;

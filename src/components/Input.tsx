interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	value?: string;
	error?: boolean;
	disabled?: boolean;
	helperText?: string;
	placeholder?: string;

	startIcon?: string;
	endIcon?: string;

	format?: "sm" | "md";
	fullWidth?: boolean;

	multiline?: boolean;
	rows?: string;
}

import { useState, FormEvent } from "react";
import "./Input.css";

export const Input: React.FC<Props> = ({
	label = "label",
	value,
	error = false,
	disabled = false,
	helperText,
	placeholder = "placeholder",
	startIcon,
	endIcon,
	format = "md",
	fullWidth = false,
	multiline = false,
	rows = "3",
	...props
}) => {
	const [initValue, setInitValue] = useState(value);

	let containerClass = "Input";
	let inputClass = "Input__input";
	let labelClass = "Input__label";
	let helperClass = "Input__helper";

	if (error) {
		labelClass += " Input__label--error";
		helperClass += " Input__helper--error";
		inputClass += " Input__input--error";
	}

	startIcon && (inputClass += " Input__input--startIcon");
	endIcon && (inputClass += " Input__input--endIcon");
	format === "sm" && (inputClass += " Input__input--sm");
	fullWidth && (containerClass += " Input--fullWidth");

	//--//
	const handleChange = (e: FormEvent<HTMLInputElement>) =>
		setInitValue(e.currentTarget.value);

	const handleTAChange = (e: FormEvent<HTMLTextAreaElement>) =>
		setInitValue(e.currentTarget.value);

	return (
		<div className={containerClass}>
			{startIcon && (
				<span className="Input__startIcon material-symbols-rounded">
					{startIcon}
				</span>
			)}

			{endIcon && (
				<span className="Input__endIcon material-symbols-rounded">
					{endIcon}
				</span>
			)}

			{multiline ? (
				<textarea
					value={initValue}
					className={inputClass}
					placeholder={placeholder}
					disabled={disabled}
					onChange={handleTAChange}
					rows={parseInt(rows)}
				></textarea>
			) : (
				<input
					{...props}
					value={initValue}
					className={inputClass}
					type="text"
					placeholder={placeholder}
					disabled={disabled}
					onChange={handleChange}
				/>
			)}

			<label className={labelClass}>{label}</label>
			<span className={helperClass}>{helperText}</span>
		</div>
	);
};

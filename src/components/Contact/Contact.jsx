import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatedBorder } from "../ui/AnimatedBorder/AnimatedBorder";
import { useSectionObserver } from "../../hooks/useSectionObserver";
import { useTranslation } from "react-i18next";

const Contact = () => {
	const [values, setValues] = useState({ email: "", subject: "", message: "" });
	const [errors, setErrors] = useState({});
	const [touched, setTouched] = useState({});
	const [loading, setLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");
	const { isFirstTimeVisible } = useSectionObserver();
	const { t } = useTranslation();

	const validate = (name, value) => {
		switch (name) {
			case "email":
				if (!value) return t("contact.errors.emailRequired");
				if (!/^\S+@\S+\.\S+$/.test(value)) return t("contact.errors.emailInvalid");
				break;
			case "subject":
				if (!value) return t("contact.errors.subjectRequired");
				break;
			case "message":
				if (!value) return t("contact.errors.messageRequired");
				if (value.length < 10) return t("contact.errors.messageMinLength");
				break;
			default:
				return;
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues((v) => ({ ...v, [name]: value }));
		if (touched[name]) {
			setErrors((err) => ({ ...err, [name]: validate(name, value) }));
		}
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;
		setTouched((t) => ({ ...t, [name]: true }));
		setErrors((err) => ({ ...err, [name]: validate(name, value) }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newErrors = {};
		Object.keys(values).forEach((k) => {
			const error = validate(k, values[k]);
			if (error) newErrors[k] = error;
		});
		if (Object.keys(newErrors).length) {
			setErrors(newErrors);
			setTouched({ email: true, subject: true, message: true });
			return;
		}

		try {
			setLoading(true);
			setSuccessMessage("");

			await emailjs.sendForm("service_jmfmg4j", "template_w0wvef5", e.target, "BFtEbcnNLQJi0tb_z");
			setSuccessMessage(t("contact.success"));
			setValues({ email: "", subject: "", message: "" });
			setTouched({});
			setErrors({});
		} catch (error) {
			console.error("Email sending error:", error);
			setSuccessMessage(t("contact.error"));
		} finally {
			setLoading(false);
		}
	};

	const inputs = [
		{
			label: t("contact.emailLabel"),
			name: "email",
			type: "email",
			placeholder: t("contact.emailPlaceholder"),
		},
		{
			label: t("contact.subjectLabel"),
			name: "subject",
			type: "text",
			placeholder: t("contact.subjectPlaceholder"),
		},
	];

	return (
		<div
			className={`${isFirstTimeVisible["contact"] ? "" : "invisible"}`}
			style={
				isFirstTimeVisible["contact"]
					? {
							animationName: "fadeIn",
							animationFillMode: "both",
							animationDuration: "1s",
							animationTimingFunction: "ease-in-out",
						}
					: {}
			}
		>
			<h2 className="font-bold text-3xl max-mobile:text-2xl">{t("contact.title")}</h2>
			<AnimatedBorder>
				<div className="max-w-xl mx-auto p-6">
					<p className="mb-6 font-bold text-center">{t("contact.description")}</p>
					<form onSubmit={handleSubmit} noValidate className="space-y-6">
						{inputs.map(({ label, name, type, placeholder }) => (
							<label key={name} className="block">
								<span className="block text-sm font-medium">{label}</span>
								<input
									className={`
                    mt-1 block w-full bg-textLight dark:bg-grayDark px-4 py-2 rounded-lg
                    focus:bg-backgroundLight dark:focus:bg-backgroundDark focus:shadow-card dark:focus:shadow-cardDark focus:outline-none
                    ${errors[name] && "border border-darkOrange"}
                  `}
									type={type}
									name={name}
									placeholder={placeholder}
									value={values[name]}
									onChange={handleChange}
									onBlur={handleBlur}
									required
								/>
								{errors[name] && <p className="mt-1 text-darkOrange text-sm">{errors[name]}</p>}
							</label>
						))}

						<div className="block">
							<label className="block text-sm font-medium">{t("contact.messageLabel")}</label>
							<textarea
								className={`
                  mt-1 block w-full bg-textLight relative dark:bg-grayDark px-4 py-2 rounded-lg resize-none h-32
                  focus:bg-backgroundLight dark:focus:bg-backgroundDark focus:shadow-card dark:focus:shadow-cardDark focus:outline-none
                  ${errors.message && "border border-darkOrange"}
                `}
								name="message"
								placeholder={t("contact.messagePlaceholder")}
								value={values.message}
								onChange={handleChange}
								onBlur={handleBlur}
								required
							/>
							{errors.message && <p className="mt-1 text-darkOrange text-sm">{errors.message}</p>}
						</div>

						<button
							type="submit"
							className="w-full font-bold shadow-btn dark:shadow-btnDark hover:shadow-btnhover dark:hover:shadow-btnDarkHover active:shadow-btnhover dark:active:shadow-btnDarkHover active:scale-98 py-2 rounded-lg duration-100"
							disabled={loading}
						>
							{loading ? t("contact.sending") : t("contact.send")}
						</button>

						{successMessage && (
							<p className="mt-4 text-center font-semibold text-green-500">{successMessage}</p>
						)}
					</form>
				</div>
			</AnimatedBorder>
		</div>
	);
};

export default Contact;

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

			{/* Card wrapper — visible on light, subtle on dark */}
			<div
				className="
            rounded-2xl mt-4
            border border-gray-200 dark:border-grayLight/20
            shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-card
            bg-white dark:bg-transparent
        "
			>
				<div className="max-w-xl mx-auto p-6">
					<p className="mb-6 font-bold text-center text-gray-700 dark:text-textLight">
						{t("contact.description")}
					</p>

					<form onSubmit={handleSubmit} noValidate className="space-y-5">
						{inputs.map(({ label, name, type, placeholder }) => (
							<label key={name} className="block">
								<span
									className="block text-sm font-medium mb-1
                                text-gray-600 dark:text-grayLight"
								>
									{label}
								</span>
								<input
									className={`
                                    mt-1 block w-full px-4 py-2 rounded-lg
                                    bg-gray-100 dark:bg-grayDark
                                    text-gray-900 dark:text-textLight
                                    placeholder:text-gray-400 dark:placeholder:text-grayLight/50
                                    border border-transparent
                                    focus:border-grayLight/40 dark:focus:border-grayLight/30
                                    focus:bg-white dark:focus:bg-backgroundDark
                                    focus:shadow-card dark:focus:shadow-cardDark
                                    focus:outline-none
                                    transition-[box-shadow,transform,opacity] duration-200
                                    ${errors[name] ? "border border-darkOrange" : ""}
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
							<label
								className="block text-sm font-medium mb-1
                            text-gray-600 dark:text-grayLight"
							>
								{t("contact.messageLabel")}
							</label>
							<textarea
								className={`
                                mt-1 block w-full px-4 py-2 rounded-lg resize-none h-32
                                bg-gray-100 dark:bg-grayDark
                                text-gray-900 dark:text-textLight
                                placeholder:text-gray-400 dark:placeholder:text-grayLight/50
                                border border-transparent
                                focus:border-grayLight/40 dark:focus:border-grayLight/30
                                focus:bg-white dark:focus:bg-backgroundDark
                                focus:shadow-card dark:focus:shadow-cardDark
                                focus:outline-none
                              transition-[box-shadow,transform,opacity] duration-200
                                ${errors.message ? "border border-darkOrange" : ""}
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
							className="
                            w-full font-bold py-2 rounded-lg 
                            bg-white dark:bg-transparent transition-[box-shadow] duration-100

                            text-gray-800 dark:text-textLight
                            border border-gray-300 dark:border-transparent
                            shadow-btn dark:shadow-btnDark
                            hover:shadow-btnhover dark:hover:shadow-btnDarkHover
                            active:shadow-btnhover dark:active:shadow-btnDarkHover
                            active:scale-[0.98]
                            disabled:opacity-50
                        "
							disabled={loading}
						>
							{loading ? t("contact.sending") : t("contact.send")}
						</button>

						{successMessage && (
							<p className="mt-4 text-center font-semibold text-green-500">{successMessage}</p>
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;

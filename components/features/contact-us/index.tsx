"use client";

import { TextStagger } from "@/components/ui/text-stagger";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, ShieldCheck } from "lucide-react";
import { Children } from "@/lib/types/common";
import { useTranslations } from "next-intl";

export function ContactUs() {
	const t = useTranslations("home.contact_us");

	return (
		<section
			id="contact_us"
			className="w-full bg-gray-950 pb-24 sm:pb-48 flex flex-col lg:flex-row items-center lg:items-start justify-center mx-auto gap-x-8"
		>
			<ContactForm />
			<div className="pt-16 gap-y-8 gap-x-4 flex flex-wrap justify-center items-center lg:flex-col flex-row">
				<Contact
					title={t("side.phone.title")}
					subHeadline={t("side.phone.subHeadline")}
					contact="438-270-5555"
				>
					<Phone className="text-primary" size={16} />
				</Contact>
				<Contact
					title={t("side.address.title")}
					subHeadline={t("side.RBQ.subHeadline")}
					contact="700 Rue de Gaspé, Verdun Qc H3E 1H2"
				>
					<MapPin className="text-primary" size={16} />
				</Contact>
				<Contact
					title={t("side.RBQ.title")}
					subHeadline={t("side.RBQ.subHeadline")}
					contact="5826-9846-01"
				>
					<ShieldCheck className="text-primary" size={16} />
				</Contact>
			</div>
		</section>
	);
}

function Contact({
	title,
	contact,
	subHeadline,
	children,
}: {
	title: string;
	contact: string;
	subHeadline: string;
} & Children) {
	return (
		<div className="w-full px-5 lg:px-0">
			<div className="flex items-center gap-x-1 w-full">
				<div className="p-1 bg-neutral-800 rounded-sm  mt-1">{children}</div>
				<h6 className="font-medium capitalize text-stone-50">{title}</h6>
			</div>

			<div className="flex flex-col items-start space-y-1 pl-7">
				<p className="text-neutral-400 text-sm ">{subHeadline}</p>
				<p className="text-neutral-400 text-sm  tabular-nums">{contact}</p>
			</div>
		</div>
	);
}

function ContactForm() {
	const t = useTranslations("home.contact_us");

	const formSchema = z.object({
		email: z.string().email(t("email.error_message")),
		firstName: z.string({ message: t("first_name.error_message") }),
		lastName: z.string({ message: t("last_name.error_message") }),
		message: z.string({ message: t("message.error_message") }).max(1000),
	});
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			firstName: "",
			lastName: "",
			message: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		if (process.env.NEXT_PUBLIC_URL) {
			await fetch(process.env.NEXT_PUBLIC_URL + "/api/send", {
				method: "POST",
				body: JSON.stringify({
					email: values.email,
					firstName: values.firstName,
					lastName: values.lastName,
					message: values.message,
				}),
			});
		}
	}
	return (
		<>
			<div className="bg-neutral-900  border-2 border-neutral-800 p-5 lg:p-16 rounded-xl">
				<h3 className="text-xl xs:text-3xl text-primary max-w-xl sm:text-4xl lg:text-5xl  font-bold ">
					<TextStagger text={t("headline")} />
				</h3>
				<p className="text-stone-50 mt-4 mx-auto mb-8 max-w-xl">
					{t("p_one")}
					<br />
					{t("p_two")}
				</p>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8 max-w-xl  "
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("email.label")}</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder={t("email.placeholder")}
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("first_name.label")}</FormLabel>
									<FormControl>
										<Input
											placeholder={t("first_name.placeholder")}
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="lastName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("last_name.label")}</FormLabel>
									<FormControl>
										<Input
											placeholder={t("last_name.placeholder")}
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("message.label")}</FormLabel>
									<FormControl>
										<Textarea
											placeholder={t("message.placeholder")}
											{...field}
										/>
									</FormControl>
									<FormDescription>{t("message.description")}</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="ml-auto block">
							{t("btn")}
						</Button>
					</form>
				</Form>
			</div>
		</>
	);
}

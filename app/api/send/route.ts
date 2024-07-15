import { EmailTemplate } from "@/components/emails/email";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { data, error } = await resend.emails.send({
			from:
				process.env.RESEND_EMAILS_SENDER ?? "fallback <onboarding@resend.dev>",
			to: body.email,
			subject: `job inquiry from ${body.firstName} ${body.LastName}`,
			react: EmailTemplate({
				firstName: body.firstName,
				lastName: body.LastName,
				message: body.message,
			}),
			text: body.message,
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}

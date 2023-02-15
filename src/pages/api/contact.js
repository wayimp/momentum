import { email } from "../../util/notify"

export default async function handler(req, res) {
    const { body } = req
    try {
        email("keith@momentummodular.com", "subject", 
        `Full Name: ${body.fullName}\nEmail: ${body.email}\nCompany Name: ${body.companyName}\nPhone: ${body.phone}\nMessage:\n${body.message}`
        )
        res.status(200).send()
    } catch (err) {
        res.status(500).send({ error: 'Error sending email' })
    }
}
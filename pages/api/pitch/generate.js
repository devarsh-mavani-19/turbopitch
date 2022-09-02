import { verifyUser } from "../../../serverutils/verifyUser"
import { generateFreelancePitch } from "../../../serverutils/utils/index"

export default async function handler(req, res) {
    if (req.method == "POST") {
        try {
            await verifyUser(req, res, null)
            let result = await generateFreelancePitch(req.body.title, req.body.description)
            res.status(200).json(result)
        } catch(e) {
            res.status(500).end('ERROR')
        }
    } else {
        res.status(404).send()
    }
}
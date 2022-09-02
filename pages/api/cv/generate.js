import { verifyUser } from "../../../serverutils/verifyUser"
import { generateCoverLetter } from "../../../serverutils/utils/index"
import { reduceCredit } from "../../../serverutils/reduceCredit"

export default async function handler(req, res) {
    if (req.method == "POST") {
        try {
            let user = await verifyUser(req, res, null)
            let result = await generateCoverLetter(req.body.title, req.body.description)
            console.log(user.email)
            let newCredits = await reduceCredit(user.email)
            res.status(200).json({credits: newCredits, result: result})
        } catch(e) {
            console.log(e)
            res.status(500).end('ERROR')
        }
    } else {
        res.status(404).send()
    }
}
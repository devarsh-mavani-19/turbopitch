const { Configuration, OpenAIApi } = require("openai");

module.exports.generateCoverLetter = async (title, description) => {
    return new Promise(async (resolve, reject) => {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
            });
            const openai = new OpenAIApi(configuration);
            console.log("PROMPT", `Create a Cover Letter for ${title} freelance work\n\n` + 
                `Freelance task Description: \n` + 
                `${description}\n`)
            const response = await openai.createCompletion({
                model: "text-davinci-002",
                prompt: `Create a Cover Letter for ${title} freelance work\n\n` + 
                `Freelance task Description: \n` + 
                `${description}\n`,
                temperature: 1,
                max_tokens: 2048,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
            console.log(response.data)
            resolve(response.data.choices.map(choice => choice.text))
    })
}

module.exports.generateFreelancePitch = async (title, description) => {
    return new Promise(async (resolve, reject) => {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
            });
            const openai = new OpenAIApi(configuration);
        
            const response = await openai.createCompletion({
                model: "text-davinci-002",
                prompt: `
                    Write a pitch for ${title} freelance work
        
                    Description: 
                    ${description}
                `,
                temperature: 1,
                max_tokens: 2048,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
            resolve(response.data.choices.map(choice => choice.text))
    })
}



module.exports.generateMiuntesOfMeeting = async (title, description) => {
    return new Promise(async (resolve, reject) => {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
            });
            const openai = new OpenAIApi(configuration);
        
            const response = await openai.createCompletion({
                model: "text-davinci-002",
                prompt: `
                    Generate Minutes of meeting from agenda of meeting
        
                    ${description}
                `,
                temperature: 1,
                max_tokens: 2048,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
            resolve(response.data.choices.map(choice => choice.text))
    })
}

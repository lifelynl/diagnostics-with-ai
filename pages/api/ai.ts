// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from 'ssh2'

enum SessionState {
    Init = 'Init',
    SymptomClarification = 'SymptomClarification',
    AmountOfDays = 'AmountOfDays',
    FollowUpSymptom = 'FollowUpSymptom',
    Conclusion = 'Conclusion',
}

interface Session {
    id: string
    stream: any
    state: SessionState
    stateData: any
}

const sessions: Session[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    if (req.method !== 'POST') {
        res.status(404).send({ error: 'method must be POST' })
        return
    }

    const { sessionId, input } = req.query

    const conn = new Client()

    let session: Session | undefined

    if (sessionId !== 'unknown') {
        session = sessions.find(session => session.id === sessionId)
    }

    if (session) {
        if (session.state === SessionState.SymptomClarification) {
            session.stream.write(`${input}\n`)
        }

        if (session.state === SessionState.AmountOfDays) {
            session.stream.write(`${input}\n`)
        }

        if (session.state === SessionState.FollowUpSymptom) {
            session.stream.write(`${input}\n`)
        }

        // rely on the stream handler, then send updated response
        setTimeout(() => {
            res.json({
                id: session!.id,
                state: session!.state,
                stateData: session!.stateData,
            } as any)
        }, 2000)
    } else {
        const randomString = Buffer.from(Math.random().toString()).toString('base64').substr(10, 5)

        session = {
            id: randomString,
            stream: undefined,
            state: SessionState.Init,
            stateData: {},
        }

        sessions.push(session)

        conn.on('ready', () => {
            console.log('Client :: ready')

            conn.shell((err: any, stream: any) => {
                if (err) throw err
                stream
                    .on('close', () => {
                        console.log('Stream :: close')
                        conn.end()
                    })
                    .on('data', (data: any) => {
                        console.log('OUTPUT: ' + data)

                        if (data.indexOf('Select the one you meant') > -1) {
                            session!.state = SessionState.SymptomClarification
                            const options = `${data}`
                                .split('\n')
                                .filter(line => line.indexOf(' ) ') > 0)
                                .map(line => line.replace('\r', '').split(' ) ')[1])
                            session!.stateData = { options }
                        }

                        if (data.indexOf('Okay. From how many days') > -1) {
                            session!.state = SessionState.AmountOfDays
                            session!.stateData = {}
                        }

                        if (data.indexOf('Are you experiencing any') > -1) {
                            session!.state = SessionState.FollowUpSymptom
                        }

                        if (session!.state === SessionState.FollowUpSymptom) {
                            session!.stateData = {
                                option: `${data}`
                                    .replace(' ? :', '')
                                    .replace('Are you experiencing any \r\n', '')
                                    .trim(),
                            }
                        }

                        if (data.indexOf('It might not be that bad but') > -1) {
                            session!.state = SessionState.Conclusion
                            session!.stateData = {
                                conclusion: `${data}`,
                            }
                        }
                    })
                stream.write(`cd ${process.env.AI_REMOTE_PATH}\n`)
                stream.write('python3 chat_bot.py\n')
                stream.write('Person\n')
                stream.write(`${input}\n`)
                session!.stream = stream

                setTimeout(() => {
                    res.json({
                        id: session!.id,
                        state: session!.state,
                        stateData: session!.stateData,
                    } as any)
                }, 2000)
            })
        }).connect({
            host: process.env.AI_HOST,
            port: process.env.AI_PORT as any,
            username: process.env.AI_USERNAME,
            password: process.env.AI_PASSWORD,
        })
    }
}

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Where the AI magic happens

### How the architecture works (sequence)

1. Frontend performs HTTP request with the first (main) symptom.
2. Server generates random string (as session ID) and establishes an SSH connection. The connection, together with the unique ID, is stored in an array.
3. The symptom is sent to the chatbot.
4. The response of the chatbot is parsed and the follow-up question is sent as response to the HTTP request from step 1, together with the session ID.
5. The frontend saves this session ID in a variable and shows the followup question to the user.
6. When the next form is submitted, the frontend performs a new HTTP request, this time with the session ID too.
7. Server looks up connection by session ID and sents the user input to the chatbot.
8. The response is parsed again and sent back to the frontend as response to the HTTP request from step 6.
9. And so on and so on, until the last response of the chatbot is no question anymore, but a conclusion. The conclusion is shown in the frontend.

### How to host it

1. Host the files from the 'magic' on a remote machine that is accessible with SSH
2. Test the python script by running `python3 chat_bot.py` on that machine
3. Add following environment variables to this nextjs backend:

```
AI_HOST=1.2.3.4
AI_PORT=22
AI_USERNAME=username
AI_PASSWORD=password
AI_REMOTE_PATH=/path/to/chatbot
```

4. You might need to restart the nextjs backend when the api is stuck :')

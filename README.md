# FlashFlight Vercel deployment

This repo is set up for a Vercel deployment using:

- a static landing page in `index.html`
- a serverless API route at `api/dialogflow.js`

## Deploy to Vercel

1. Push this repo to GitHub.
2. Open Vercel and import the repository.
3. Keep the default project settings.
4. Click Deploy.

## API endpoint

The serverless chatbot endpoint is:

- `/api/dialogflow`

Example request:

```js
fetch("/api/dialogflow", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query: "flight schedule" }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

## Notes

- The landing page design is preserved from the existing project.
- The Express backend has been replaced by a Vercel-compatible serverless API.

- The app is ready for static hosting plus serverless functions on Vercel.

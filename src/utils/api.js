export const getData = () =>
fetch("/graphql", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
    query: `
        {
        movies{
        id
        name
        genre
        actor{
            id
            name
            age
        }
        }
      }
    `,
    })
})
    .then((res) => res.json())
    .then((result) => result);
export const posts = (store) => ({
  fetchPosts: () => {
    return fetch(
      `https://ff0a866f76673cb912624bff98a414d2-dev.preview.zestyio.localdev:3020/-/instant/6-5aa1f33-h2z6pc.json`
    )
      .then((res) => res.json)
      .then((json) => store.setState("posts", json.data))
      .catch((err) => {
        console.log(err);
        // store.setState("error:posts", err)
      });
  },
});

axios.get('https://api.github.com/users/flaviohenso')
    .then((response) => {
        console.log(response.data.avatar_url)
    })
    .catch((error) => {
        console.warn(error);

    })
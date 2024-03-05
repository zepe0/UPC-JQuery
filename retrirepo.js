function repo() {
  fetch("https://api.github.com/users/octocat/repos").then((res) => {
    let repos = res.json();
    console.log(repos);
    return repos;
  });
}

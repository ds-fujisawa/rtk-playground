export const getRepos = async (userName: string) => {
  const url = `https://api.github.com/users/${userName}/repos`;
  const res = await fetch(url);
  return await res.json();
};

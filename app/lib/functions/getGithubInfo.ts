import { Octokit } from "octokit";

export async function get_repository(repository: String) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const repo = await octokit.request(`GET /repos/linoles/${repository}`, {
    owner: "linoles",
    repo: repository,
    headers: {
      "X-Github-Api-Version": "2026-03-10",
    },
  });

  return repo;
}

export async function get_repository_content(repository: String, path: String = "") {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const content = await octokit.request(`GET /repos/linoles/${repository}/contents/${path}`, {
    owner: "linoles",
    repo: repository,
    path: '/' + path,
    headers: {
      "X-Github-Api-Version": "2026-03-10",
    },
  });

  return content;
}

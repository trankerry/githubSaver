// default values and types needed for each user
export interface User {
    username: string;
    name: string;
    publicRepos: number;
    publicGists: number;
    followers: number;
    following: number;
    createdAt: string;
}
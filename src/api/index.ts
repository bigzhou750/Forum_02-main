import { Client, Account, Teams, Functions, Databases,  Storage, Avatars} from "appwrite";
import { ENDPOINT, PROJECT_ID } from "../constants/config";

const client = new Client();
client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);

const team = new Teams(client);
const account = new Account(client);
const functions = new Functions(client);
const databases = new Databases(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
export { client, account, team, functions, databases, storage, avatars };

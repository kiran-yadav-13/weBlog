import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
        console.log("appwrite")
            
    }

    async createAccount({email, password, name}) {
        try {
            console.log('REQUEST: createAccount', { email, name })
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            console.log('RESPONSE: createAccount', userAccount)
            if (userAccount) {
                return this.login({email, password});
            } else {
               return userAccount;
            }
        } catch (error) {
            console.error('ERROR: createAccount', error)
            throw error;
        }
    }

    async login({email, password}) {
        try {
            console.log('REQUEST: login', { email })
            const res = await this.account.createEmailSession(email, password);
            console.log('RESPONSE: login', res)
            return res
        } catch (error) {
            console.error('ERROR: login', error)
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            console.log('REQUEST: getCurrentUser')
            const res = await this.account.get();
            console.log('RESPONSE: getCurrentUser', res)
            return res
        } catch (error) {
            console.error('ERROR: getCurrentUser', error)
        }

        return null;
    }

    async logout() {

        try {
            console.log('REQUEST: logout')
            const res = await this.account.deleteSessions();
            console.log('RESPONSE: logout', res)
            return res
        } catch (error) {
            console.error('ERROR: logout', error)
            throw error
        }
    }
}

const authService = new AuthService();

export default authService



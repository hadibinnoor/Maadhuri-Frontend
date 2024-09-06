import { Auth, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

class AccountManager {
    static async signIn(email: string, password: string) {

        const auth: Auth = getAuth();
        let result;
        try {
            result = await signInWithEmailAndPassword(auth, email, password);
        } catch (e) {
            console.log('Auth signin error');
            console.log();

            return { error: true, detail: (e as any).code };
        }

        const user = result.user;

        return { error: false, detail: user };
    }

}

export default AccountManager;
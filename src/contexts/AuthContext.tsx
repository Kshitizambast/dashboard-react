import React from 'react'

interface AuthContextInterface {
   
    registeredUser: any;
    signIn: (user: any) => void;
    signOut: () => void;

}

export let AuthContext = React.createContext<AuthContextInterface>(null!);

export const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    const [user, setUser] = React.useState<any>(null);

    // setUser({name: 'user', token: 'token'});
    

    const signIn = (user: any) => {
        setUser(user);
        // Store user in local storage
        localStorage.setItem('user', JSON.stringify(user));

    };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem('user');
        
    };

    const registeredUser = localStorage.getItem('user');

    
    let value = { registeredUser, signIn, signOut };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}


// export default AuthContext
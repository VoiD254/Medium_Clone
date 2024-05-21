import { Quote } from "../components/Quote";
import {SignInAuth} from "../components/SignInAuth";

export const SignIn = () => {
    return(
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <SignInAuth/>
                </div>
                <div className="none lg:block">
                    <Quote/>    
                </div>
            </div>
        </div>
    );
};

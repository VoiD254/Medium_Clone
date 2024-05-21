import { Quote } from "../components/Quote";
import {Auth} from "../components/SignUpAuth";

export const SignUp = () => {
    return(
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <Auth/>
                </div>
                <div className="none lg:block">
                    <Quote/>    
                </div>
            </div>
        </div>
    );
};

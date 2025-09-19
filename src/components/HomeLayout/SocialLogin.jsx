import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const SocialLogin = () => {
  return (
    <div>
      <h3 className="mb-4 font-bold text-lg">Login With</h3>
      <div className="space-y-4">
        <button className="btn btn-outline btn-success w-full"><FaGoogle className=""></FaGoogle> Login With Google</button>
        <button className="btn btn-outline w-full btn-accent"><FaGithub></FaGithub> Login With Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;

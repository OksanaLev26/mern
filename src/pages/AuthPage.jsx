import SignUpForm from "../components/SignUpForm";
import LoginForm from "./LoginForm";

export default function AuthPage({setUser}) {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm setUser={setUser}/>
      <LoginForm setUser={setUser}/>
    </main>
  );
}

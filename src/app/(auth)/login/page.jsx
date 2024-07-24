import LoginForm from "./LoginForm";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-slate-200 h-full">
      <h1 className="text-3xl font-bold">Login</h1>
      <LoginForm />
    </div>
  );
}

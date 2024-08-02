import { auth } from "@/auth";
const AuthPreview = async() => {
  const session = await auth();
  return (
    <div className="mx-auto w-full">
      <div
        className="bg-card text-card-foreground w-full rounded-lg border shadow-sm"
        data-v0-t="card"
      >
        <div className="p-6">
          <div className="relative rounded-md bg-[#1e1e1e] p-4">
            <pre className="font-mono text-sm text-[#d4d4d4]">
              <code className="language-json">{JSON.stringify(session)}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPreview;

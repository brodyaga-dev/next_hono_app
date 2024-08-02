import Link from "next/link";
const NotAuthenticatedCard = () => {
  return (
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-sm mt-32"
      data-v0-t="card"
    >
      <div className="flex flex-col p-6 space-y-1">
        <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">
          Not Authenticated
        </h3>
        <p className="text-sm text-muted-foreground">
          You need to be logged in to access this content.
        </p>
      </div>
      <div className="p-6">
        <Link
          href="/"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-400 text-primary-foreground hover:bg-green-400/80 h-10 px-4 py-2 w-full"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};
export default NotAuthenticatedCard;
import { auth, signOut } from "@/auth";
export default async function SettingsPage() {
  const session = await auth();
  return (
    <div>
      <pre>
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}

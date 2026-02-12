"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
    router.refresh();
  }
  return (
    <button
      type="button"
      onClick={handleLogout}
      className="text-sm text-gray-600 hover:underline"
    >
      Log out
    </button>
  );
}

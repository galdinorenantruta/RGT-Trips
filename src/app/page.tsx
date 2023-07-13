"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

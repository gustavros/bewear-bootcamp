"use client"

import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

const Home = () => {
  const router = useRouter();
  const {
    data: session,
    isPending, //loading state
    error, //error object
  } = authClient.useSession()

  if (isPending) {
    return <div>Carregando...</div>
  }

  if (error) {
    return <div>Erro ao carregar sessão</div>
  }

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">Bem-vindo ao BeWear</h1>
        <p className="mt-4 text-lg">Sua plataforma de moda consciente.</p>

        {session ? (
          <p className="mt-2 text-green-600">
            Logado como: {session.user.email}
          </p>
        ) : (
          <p className="mt-2 text-red-600">
            Usuário não está logado
          </p>
        )}

        <div className="mt-6 space-x-4">
          <button className="rounded bg-blue-500 px-4 py-2 text-white" onClick={() => router.push(session ? "/" : "/authentication")}>
            {session ? "Acessar Dashboard" : "Fazer Login"}
          </button>
          <button className="rounded bg-gray-300 px-4 py-2 text-black" onClick={() => authClient.signOut()}>
            Sair
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;

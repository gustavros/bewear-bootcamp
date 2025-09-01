"use client"

import { Home, LogIn, LogOut, MenuIcon, ShoppingBag, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

const Header = () => {
    const {
        data: session,
        isPending
    } = authClient.useSession()

    return (
        <header className="py-6 px-5 flex items-center justify-between">
            <Link href="/">
                <Image src="/logo.svg" alt="BeWear Logo" width={150} height={50} />
            </Link>

            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent className="rounded-tl-2xl rounded-bl-2xl scroll-auto">
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                        <SheetDescription>
                            Acesse suas configurações e preferências.
                        </SheetDescription>
                    </SheetHeader>

                    <div className="flex flex-col space-y-4 px-5">
                        {session?.user ? (
                            <div className="flex gap-3 space-y-4">
                                <div className="flex items-center">
                                    <Avatar className="h-11 w-11">
                                        <AvatarImage
                                            src={session?.user?.image as string | undefined}
                                        />
                                        <AvatarFallback>
                                            {session?.user?.name?.split(" ")?.[0]?.[0]}
                                            {session?.user?.name?.split(" ")?.[1]?.[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                </div>

                                <div>
                                    <h2 className="font-semibold">{session?.user?.name}</h2>
                                    <span className="text-muted-foreground block text-xs">
                                        {session?.user?.email}
                                    </span>
                                </div>
                            </div>

                        ) : (
                            <div className="flex items-center justify-between">
                                <h2 className="font-semibold">Olá. Faça seu login!</h2>

                                <Button variant={"outline"} asChild className="cursor-pointer" >
                                    <Link href={"/auth"}>
                                        <LogIn />
                                    </Link>
                                </Button>
                            </div>
                        )}

                        <hr />

                        <div className="flex flex-col">
                            <Button asChild className="flex items-center justify-start gap-3 py-3" variant={"ghost"}>
                                <Link href="/">
                                    <Home className="h-4 w-4" />
                                    <span className="text-sm font-medium">
                                        Início
                                    </span>
                                </Link>
                            </Button>

                            <Button asChild className="flex items-center justify-start gap-3 py-3" variant={"ghost"}>
                                <Link href="/orders" >
                                    <Truck className="h-4 w-4" />
                                    <span className="text-sm font-medium">
                                        Meus pedidos
                                    </span>
                                </Link>
                            </Button>

                            <Button asChild className="flex items-center justify-start gap-3 py-3" variant={"ghost"}>
                                <Link href="/cart" >
                                    <ShoppingBag className="h-4 w-4" />
                                    <span className="text-sm font-medium">
                                        Sacola
                                    </span>
                                </Link>
                            </Button>
                        </div>

                        {session?.user && (
                            <div className="flex flex-col gap-5 mt-auto py-4">
                                <hr />
                                <Button disabled={isPending} onClick={() => authClient.signOut()} className="flex cursor-pointer hover:text-red-500 hover:bg-red-100 items-center justify-start gap-3 py-3 text-zinc-600" variant={"ghost"}>
                                    <LogOut className="h-4 w-4" />
                                    <span className="text-sm font-medium">
                                        Sair da conta
                                    </span>
                                </Button>
                            </div>
                        )}
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    );
}

export default Header;
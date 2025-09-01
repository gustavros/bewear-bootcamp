import Image from "next/image"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import SignInForm from "./components/sign-in-form"
import SignUpForm from "./components/sign-up-form"

const Authentication = () => {
    return (
        <div className="flex flex-col gap-6 max-w-lg mx-auto p-5 justify-center">

            <Image src="/logo.svg" alt="BeWear Logo" width={150} height={50} className="mx-auto mb-5" />

            <Tabs defaultValue="sign-in">
                <TabsList>
                    <TabsTrigger value="sign-in">Entrar</TabsTrigger>
                    <TabsTrigger value="sign-up">Criar conta</TabsTrigger>
                </TabsList> 

                <TabsContent value="sign-up">
                    <SignUpForm />
                </TabsContent>

                <TabsContent value="sign-in">
                    <SignInForm />
                </TabsContent>
            </Tabs>
        </div>
    )
}
export default Authentication
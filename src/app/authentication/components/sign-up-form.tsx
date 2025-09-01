'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";

const formSchema = z.object({
    name: z.string().min(2, "Nome é obrigatório").max(100),
    email: z.email("E-mail inválido.").min(1, "E-mail é obrigatório"),
    password: z.string().min(8, "Senha deve ter pelo menos 6 caracteres").max(100),
    confirmPassword: z.string().min(8, "Confirmação de senha é obrigatória").max(100)
}).refine((data) => {
    return data.password === data.confirmPassword;
}, {
    error: "As senhas não coincidem.",
    path: ["confirmPassword"],
});

type FormValues = z.infer<typeof formSchema>;

const SignUpForm = () => {
    const router = useRouter();
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {},
    })

    async function onSubmit(values: FormValues) {
        const { name, email, password } = values;

        await authClient.signUp.email({
            name,
            email,
            password,
            callbackURL: "http://localhost:3000/",
            fetchOptions: {
                onSuccess: () => {
                    router.push("/");

                },
                onError: (error) => {
                    if (error.error.code === "EMAIL_ALREADY_EXISTS") {
                        toast.error("E-mail já cadastrado.");
                        return;
                    }

                    toast.error(error.error.message);
                }

            }
        });
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Criar conta</CardTitle>
                <CardDescription>
                    Crie sua conta aqui.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Seu nome" {...field} autoComplete="name" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>E-mail</FormLabel>
                                    <FormControl>
                                        <Input placeholder="example@example.com" {...field} autoComplete="email" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Senha</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="********"
                                            {...field}
                                            type="password"
                                            autoComplete="new-password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Digite a sua senha novamente</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="********"
                                            {...field}
                                            type="password"
                                            autoComplete="new-password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            disabled={form.formState.isSubmitting}
                            type="submit">
                            {form.formState.isSubmitting ? "Criando..." : "Criar conta"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}

export default SignUpForm;
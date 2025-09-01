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
    email: z.email("E-mail inválido!"),
    password: z.string("Senha deve ter pelo menos 6 caracteres.").min(6).max(100),
});

type FormValues = z.infer<typeof formSchema>;

const SignInForm = () => {
    const router = useRouter();
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {},
    })

    async function onSubmit(values: FormValues) {
        const { email, password } = values;

        await authClient.signIn.email({
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
                <CardTitle>Entrar</CardTitle>
                <CardDescription>
                    Acesse sua conta aqui.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>E-mail</FormLabel>
                                    <FormControl>
                                        <Input placeholder="example@example.com" {...field} />
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
                                        <Input placeholder="********" {...field} type="password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            disabled={form.formState.isSubmitting}
                            type="submit">
                            {form.formState.isSubmitting ? "Entrando..." : "Entrar"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}

export default SignInForm;
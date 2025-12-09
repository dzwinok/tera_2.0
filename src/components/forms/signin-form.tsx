"use client";
import { actions } from "@/data/actions";
import { useActionState } from "react";
import { type FormState } from "@/data/validation/auth";

import Link from "next/link";

import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
    Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/custom/submit-button";

import { ZodErrors } from "@/components/custom/ZodErrors";
import { StrapiErrors } from "@/components/custom/StrapiErrors";

const styles = {
    container: "w-full max-w-md",
    header: "space-y-1",
    title: "text-3xl font-bold",
    content: "space-y-4",
    fieldGroup: "space-y-2",
    footer: "flex flex-col",
    button: "w-full bg-tera-green hover:bg-tera-dark-green text-white font-bold py-2 px-4 rounded-xl",
    prompt: "mt-4 text-center text-sm",
    link: "underline ml-2",
};

const INITIAL_STATE: FormState = {
    success: false,
    message: undefined,
    strapiErrors: null,
    zodErrors: null,
};

export function SigninForm() {
    const [formState, formAction] = useActionState(
        actions.auth.loginUserAction,
        INITIAL_STATE
    );

    return (
        <div className={styles.container}>
            <form action={formAction}>
                <Card>
                    <CardHeader className={styles.header}>
                        <CardTitle className={styles.title}>Sign In</CardTitle>
                        <CardDescription>
                            Enter your details to sign in to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className={styles.content}>
                        <div className={styles.fieldGroup}>
                            <Label htmlFor="email">Email or username</Label>
                            <Input
                                id="identifier"
                                name="identifier"
                                type="text"
                                placeholder="email/username"
                                defaultValue={formState?.data?.identifier || ""}
                            />
                            <ZodErrors error={formState?.zodErrors?.identifier} />
                        </div>
                        <div className={styles.fieldGroup}>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="password"
                                defaultValue={formState?.data?.password || ""}
                            />
                            <ZodErrors error={formState?.zodErrors?.password} />                            
                        </div>
                    </CardContent>
                    <CardFooter className={styles.footer}>
                        <SubmitButton
                            className="w-full"
                            text="Sign In"
                            loadingText="Loading"
                        />
                        <StrapiErrors error={formState?.strapiErrors} />
                    </CardFooter>
                </Card>
                <div className={styles.prompt}>
                    Don&apos;t have an account?
                    <Link className={styles.link} href="signUp">
                        Sign Up
                    </Link>
                </div>
            </form>
        </div>
    );
}

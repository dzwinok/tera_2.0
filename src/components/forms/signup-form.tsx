"use client";
import { type FormState } from "@/data/validation/auth";
import { useActionState } from "react";
import Link from "next/link";
import { actions } from "@/data/actions";
import { useEffect, useState } from "react";

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
import { Button } from "@/components/ui/button";
import { SubmitButton } from "@/components/custom/submit-button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { ZodErrors } from "@/components/custom/ZodErrors";
import { StrapiErrors } from "@/components/custom/StrapiErrors";

const styles = {
    container: "w-full max-w-md",
    header: "space-y-1",
    title: "text-3xl font-bold",
    content: "space-y-4",
    fieldGroup: "space-y-2",
    footer: "flex flex-col",
    button:
        "w-full bg-tera-green hover:bg-tera-dark-green text-white font-bold py-2 px-4 rounded-xl",
    prompt: "mt-4 text-center text-sm",
    rowInputs: "flex flex-row justify-between",
    link: "underline ml-2",
};

const INITIAL_STATE: FormState = {
    success: false,
    message: undefined,
    strapiErrors: null,
    zodErrors: null,
};

export function SignupForm() {
    const [formState, formAction] = useActionState(
        actions.auth.registerUserAction,
        INITIAL_STATE
    );
    
    const [genderValue, setGenderValue] = useState<string>("");
    
    useEffect(() => {
        const g = formState?.data?.gender;
        setGenderValue(typeof g === "string" ? g : "");
    }, [formState?.data?.gender]);

    console.log("## will render on client ##");
    console.log(formState);
    console.log("###########################");

    return (
        <div className={styles.container}>
            <form action={formAction}>
                <Card>
                    <CardHeader className={styles.header}>
                        <CardTitle className={styles.title}>Sign Up</CardTitle>
                        <CardDescription>
                            Enter your details to create a new account
                        </CardDescription>
                    </CardHeader>

                    <CardContent className={styles.content}>
                        <div className={styles.rowInputs}>
                            <div className={styles.fieldGroup}>
                                <Label htmlFor="firstname">First name</Label>
                                <Input
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    placeholder="Володимир"
                                    defaultValue={formState?.data?.firstname || ""}
                                />
                                <ZodErrors error={formState?.zodErrors?.firstname} />
                            </div>
                            <div className={styles.fieldGroup}>
                                <Label htmlFor="lastname">Last name</Label>
                                <Input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    placeholder="Зелінський"
                                    defaultValue={formState?.data?.lastname || ""}
                                />
                                <ZodErrors error={formState?.zodErrors?.lastname} />
                            </div>
                        </div>
                        
                        <div className={styles.fieldGroup}>
                            <Label htmlFor="gender">Gender</Label>
                            <Select value={genderValue} onValueChange={setGenderValue}>
                                <SelectTrigger id="gender">
                                    <SelectValue placeholder="Select your gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                                </SelectContent>
                            </Select>
                            <input type="hidden" name="gender" value={genderValue} />
                            <ZodErrors error={formState?.zodErrors?.gender} />
                        </div>

                        <div className={styles.fieldGroup}>
                            <Label htmlFor="birthdate">Date of birth</Label>
                            <Input
                                id="birthdate"
                                name="birthdate"
                                type="date"
                                placeholder="Your date of birth"
                                defaultValue={formState?.data?.birthdate || ""}
                            />
                            <ZodErrors error={formState?.zodErrors?.birthdate} />
                        </div>

                        <div className={styles.fieldGroup}>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="name@example.com"
                                defaultValue={formState?.data?.email || ""}
                            />
                            <ZodErrors error={formState?.zodErrors?.email} />
                        </div>

                        <div className={styles.fieldGroup}>
                            <Label htmlFor="phone">Phone number</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="text"
                                placeholder="+380 000 00 0000"
                                defaultValue={formState?.data?.phone || ""}
                            />
                            <ZodErrors error={formState?.zodErrors?.phone} />
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
                            text="Sign Up"
                            loadingText="Loading"
                        />
                        <StrapiErrors error={formState?.strapiErrors} />
                    </CardFooter>
                </Card>

                <div className={styles.prompt}>
                    Have an account?
                    <Link className={styles.link} href="signIn">
                        Sign In
                    </Link>
                </div>
            </form>
        </div>
    );
}

import { z } from "zod";

export const SigninFormSchema = z.object({
    identifier: z
        .string()
        .min(3, "Username or email must be at least 3 characters"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(100, "Password must be less than 100 characters"),
});

export const SignupFormSchema = z.object({
    firstname: z
        .string()
        .min(2, "Firstname must be at least 2 characters")
        .max(20, "Firstname must be less than 20 characters"),
    lastname: z
        .string()
        .min(2, "Lastname must be at least 2 characters")
        .max(30, "Lastname must be less than 30 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(100, "Password must be less than 100 characters"),
    gender: z.string(),
    birthdate: z
        .coerce.date()
        //.refine((d) => d >= new Date("1930-01-01") && d <= new Date("2012-01-01"), "You have to be at least 14"),
        .max(new Date("2020-01-01"), {
            message: "You can`t be that young to use our services",
        }).min(new Date("1930-01-01"), {
            message: "You can`t be that old. Please enter your valid age",})
});

export type SigninFormValues = z.infer<typeof SigninFormSchema>;
export type SignupFormValues = z.infer<typeof SignupFormSchema>;

export type FormState = {
    success?: boolean;
    message?: string;
    data?: {
        identifier?: string;
        firstname?: string;
        lastname?: string;
        email?: string;
        birthdate?: Date;
        gender?: string;
        password?: string;
    };
    strapiErrors?: {
        status: number;
        name: string;
        message: string;
        details?: Record<string, string[]>;
    } | null;
    zodErrors?: {
        identifier?: string[];
        username?: string[];
        email?: string[];
        password?: string[];
    } | null;
};
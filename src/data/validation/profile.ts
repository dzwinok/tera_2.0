import { z } from "zod";

export const ProfileFormSchema = z.object({
    firstname: z
        .string()
        .min(1, "First name is required")
        .max(50, "First name must be less than 50 characters"),
    lastname: z
        .string()
        .min(1, "Last name is required")
        .max(50, "Last name must be less than 50 characters"),
    
});

export type ProfileFormValues = z.infer<typeof ProfileFormSchema>;

//{ zodErrors: any; data: { [p: string]: File | string }; success: boolean; strapiErrors: null; message: string }
export type ProfileFormState = {
    success?: boolean;
    message?: string;
    data?: {
        firstname?: string;
        lastname?: string;
    };
    strapiErrors?: {
        status: number;
        name: string;
        message: string;
        details?: Record<string, string[]>;
    } | null;
    zodErrors?: {
        firstname?: string[];
        lastname?: string[];
        
    } | null;
};
export type ProfileCoursesFormState = {
    success?: boolean;
    message?: string;
    data?: {
        courses?: any[];
    } | number;
    strapiErrors?: {
        status: number;
        name: string;
        message: string;
        details?: Record<string, string[]>;
    } | null;
    zodErrors?: {
        courses?: any[];

    } | null;
};

export const ProfileImageFormSchema = z.object({
    image: z
        .instanceof(File)
        .refine((file) => file.size > 0, "Image is required")
        .refine((file) => file.size <= 5000000, "Image must be less than 5MB")
        .refine(
            (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
            "Image must be JPEG, PNG, or WebP format"
        ),
});

export type ProfileImageFormValues = z.infer<typeof ProfileImageFormSchema>;

export type ProfileImageFormState = {
    success?: boolean;
    message?: string;
    data?: {
        image?: File;
    };
    strapiErrors?: {
        status: number;
        name: string;
        message: string;
        details?: Record<string, string[]>;
    } | null;
    zodErrors?: {
        image?: string[];
    } | null;
};
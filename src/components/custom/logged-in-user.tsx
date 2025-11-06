import Link from "next/link";
import { LogoutButton } from "./logout-button";

interface ILoggedInUserProps {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
}

export function LoggedInUser({
                                 userData,
                             }: {
    readonly userData: ILoggedInUserProps;
}) {
    return (
        <div className="flex gap-2">
            <Link
                href="/sales" // TODO: make a user page to link there
                className="font-semibold text-white hover:text-primary"
            >
                {userData?.firstname} {userData?.lastname}
            </Link>
            <LogoutButton />
        </div>
    );
}
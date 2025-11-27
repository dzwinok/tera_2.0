import { useState } from "react";

export function useActionState(action, initialState) {
    const [state, setState] = useState(initialState);
    const [isPending, setIsPending] = useState(false);

    async function runAction(formData) {
        setIsPending(true);

        try {
            const result = await action(formData);
            setState(result);
            return result;
        } finally {
            setIsPending(false);
        }
    }

    return [state, runAction, isPending];
}

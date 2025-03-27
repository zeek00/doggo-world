'use server';

import { redirect } from "next/navigation";

export async function getQuery(formData: FormData) {
    const query = formData.get('query') as string | null;

    if (!query) {
        throw new Error("Query is required");
    }

    // Redirect with search parameters
    redirect(`/search/${encodeURIComponent(query)}`);
}
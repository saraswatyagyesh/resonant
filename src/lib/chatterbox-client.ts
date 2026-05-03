import createClient from "openapi-fetch";
import type { paths } from "@/types/chatterbox-api"; // Occuring bcoz model is not deployed and ENV key is not set
import { env } from "./env";

export const chatterbox = createClient<paths>({
    baseUrl: env.CHATTERBOX_API_URL,
    headers: {
        "x-api-key": env.CHATTERBOX_API_KEY,
    },
});
import { createContext } from "react";

import type { UserAuthContextType } from "../data/types";

export const UserAuthContext = createContext<UserAuthContextType | null>(null);
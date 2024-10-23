import { User } from "@prisma/client";

interface ServerValidateTokenResponse {
    jwtToken: string;
    refreshToken: string;
    user: User;
}

interface ServerPassedVerfifiedChecksResponse {
    message: string;
    passed: boolean;
}

interface ValidateTokenReturnPolicy {
    user?: User;
    valid: boolean;
}

interface ServerLocalIdentifierAvailableReturnPolicy {
    isAvailable: boolean;
    isValid: boolean;
}

export { ServerLocalIdentifierAvailableReturnPolicy, ServerPassedVerfifiedChecksResponse, ValidateTokenReturnPolicy, ServerValidateTokenResponse }
// frontend/src/lib/serviceSelector.ts

import { authService } from './authService';
import { mockAuthService } from './mockAuthService';

// Determine which service to use based on environment
const USE_MOCK_SERVICE = process.env.NEXT_PUBLIC_USE_MOCK_AUTH === 'true';

export const authServiceToUse = USE_MOCK_SERVICE ? mockAuthService : authService;
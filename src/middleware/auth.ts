import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { authApi } from '../app/services/auth';

export const listenerMiddleware = createListenerMiddleware();

const matcher = isAnyOf(
  authApi.endpoints.login.matchFulfilled,
  authApi.endpoints.register.matchFulfilled,
);

listenerMiddleware.startListening({
  matcher,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    if (action.payload.token) {
      localStorage.setItem('token', action.payload.token);
    }
  },
});

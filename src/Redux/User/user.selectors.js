import { createSelector } from "reselect";

const selectUser = State => State.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser 
);
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = [
	{
		id: "1",
		name: "Viola Amherd",
		email: "viola.amherd@correo.com",
		github: "midudev",
	},
	{
		id: "2",
		name: "Ueli Maurer",
		email: "ueli.maurer@correo.com",
		github: "uelimaurer",
	},
	{
		id: "3",
		name: "Guy Parmelin",
		email: "guy.parmelin@correo.com",
		github: "guyparmelin",
	},
	{
		id: "4",
		name: "Karin Keller-Sutter",
		email: "karin.keller@correo.com",
		github: "karinkeller",
	},
];

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export default userSlice.reducer;

export const { deleteUserById } = userSlice.actions;

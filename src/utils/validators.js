export const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

export const isValidPassword = (password) => password.length >= 6;

export const isEmpty = (value) => !value || value.trim().length === 0;

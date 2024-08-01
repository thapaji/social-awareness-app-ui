import { useAuth, useUser } from "@clerk/clerk-react";

export const getUserRole = async () => {
    console.log('aaaaaayyyyopooooooo')
    const { user } = await useUser();
    console.log(user)
    return user.publicMetadata.role;
};

export const getUser = async () => {
    const { user } = await useUser();
    return user;
};

export const getToken = async () => {
    const { user } = await useAuth();
    return user;
};


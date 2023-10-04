export const WebConstants = {
    /* baseUrl: 'http://localhost:4000/api',
    imageBaseURL: 'http://localhost:4000/uploads/projects/', */

    baseUrl: 'https://api.rutustudio.com/api',
    imageBaseURL: 'https://api.rutustudio.com/uploads/projects/',

    login: 'admin/login',
    userDetails: 'admin/user-details',
    verifyToken: 'admin/verify-token',
    breeds: 'breeds/admin/get-all-breeds/',
    updateBreed: 'breeds/edit',
    updateBreedStatus: 'breeds/update-status',
    users: 'admin/users',

    //FAQ
    addFAQ: 'faq/create',
    getAllFAQ: 'faq/list',
    updateFAQ: 'faq/update',
    deleteFAQ: 'faq/delete',

    allProjects: 'projects',
    homeProjects: 'projects/home-projects',
    allCategories: 'projects/categories',
    getImages: 'projects/project-images',
    deleteImage: 'projects/admin-delete-image',

    requestQuote: 'projects/request-quote',

    //Contact
    contactUser: 'contact',
    deleteContact: 'contact',

    //Users and Admin
    getAllUsers: 'users/all-users',
    addAdmin: 'users/add-admin',
    getAllAdmin: 'users/admin-list',
    updateAdmin: 'users/admin-update',
    deleteAdmin: 'users/remove-admin/',
    updateUserStatus: 'users/update-user-status/',
    updateAdminStatus: 'users/update-admin-status/',
    resetSubAdminPassword: 'users/reset-admin-pass',
    updateAdminProfile: 'users/update-admin-profile',
    updateAdminPassword: 'users/update-admin-password',
}

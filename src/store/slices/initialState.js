import {__mockData} from "../../data/__mockData";
import {getStorageItem} from "../../helpers/localStorage";

export function initialState() {
    return {
        usersData: getStorageItem('localUsersData') ?  getStorageItem('localUsersData') :__mockData,
        selectedUsers: [],
        isSidebarMenuOpen: false,
        isEditModalOpen: false,
        isDeleteModalOpen: false,
    };
}

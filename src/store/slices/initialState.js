import {__mockData} from "../../data/__mockData";
import {getStorageItem} from "../../helpers/localStorage";

export function initialState() {
    return {
        usersData: getStorageItem('localUsersData') || __mockData,
        isSidebarMenuOpen: false,
        isEditModalOpen: false,
        isDeleteModalOpen: false,
    };
}

const setStorageItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getStorageItem = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        localStorage.removeItem(key);
    }
};

const removeStorageItem = (key) => {
    localStorage.removeItem(key);
};

export {
    setStorageItem,
    getStorageItem,
    removeStorageItem,
};

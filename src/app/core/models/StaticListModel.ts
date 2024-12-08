export abstract class StaticListModel<T> {

    /**
     * Retrieves all static properties defined as objects in the child class.
     * @returns An array of items of type T.
     */
    public static getAll<T>(): T[] {
        return Object.values(this)
            .filter((value) => typeof value === 'object') as T[];
    }
}

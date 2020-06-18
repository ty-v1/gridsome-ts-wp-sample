export interface PageInstanceProp<T> {
    readonly $page: T;
}

class A implements PageInstanceProp<number> {
    readonly $page!: number;

}

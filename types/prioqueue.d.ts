declare namespace item {
  export interface Constructor {
    new <T = any>(priority: number, value: T): Instance<T>;
  }

  export interface Instance<T> {
    value: T;
    readonly priority: number;
    toPair(): [number, T];
  }
}

declare namespace queue {
  interface Item<T> extends item.Instance<T> {}

  export interface Constructor {
    new <T = any>(): Instance<T>;
  }

  export interface Instance<T> {
    readonly size: number;
    clear(): this;
    forEach(fn: (x: Item<T>) => void): this;
    isEmpty(): boolean;
    peek(): Item<T> | undefined;
    priorities(): number[];
    toPairs(): Array<[number, T]>;
    values(): T[];
  }
}

declare namespace prioqueue {
  export interface Item<T = any> extends item.Instance<T> {}
  export interface Queue<T = any> extends queue.Instance<T> {}
}

declare const prioqueue: {
  Item: item.Constructor;
  Queue: queue.Constructor;
};

export = prioqueue;

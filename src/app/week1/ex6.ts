const logMethod = (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Call: ${key}(${args})`);
        const result = originalMethod.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
    };
    return descriptor;
}

class Calculator {
    @logMethod
    public add(a: number, b: number): number {
        return a + b;
    }
}

const calculator = new Calculator();
calculator.add(1, 2);
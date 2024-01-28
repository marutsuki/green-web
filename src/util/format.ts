const THOUSANDS_FACTOR = 1000;

const DECIMAL_POINTS = 3;

export function formatDecimal(value: number): number {
    const factor = Math.pow(10, DECIMAL_POINTS);
    return Math.round(value * factor) / factor;
}

export function formatThousands(value: number): number {
    return Math.round(value / THOUSANDS_FACTOR);
}
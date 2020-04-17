export default function maxMinDiff(a1, a2) {
    let maxValue = 0;
    let minValue = 0;
    for (let i = 0; i < a1.length; i++) {
        const valArr = a2.map(v => Math.abs(a1[i] - v)).sort((a, b) => b - a);

        maxValue = valArr[0] > maxValue ? valArr[0] : maxValue;
        minValue =
            valArr[valArr.length - 1] < minValue || i === 0
                ? valArr[valArr.length - 1]
                : minValue;
    }

    return [maxValue, minValue];
}

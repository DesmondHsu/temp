export const calculator = ({a, b}) => {

    // Default behaviour
    const calculateC = () => a + b;

    // Update a
    const updateA = (value) => a = value

    // Update b
    const updateB = (value) => b = value

    // update c
    const updateC = (value) => a = value - b

    return {
        getA: () => a,
        getB: () => b,
        calculateC,
        updateA,
        updateB,
        updateC,
    }
}
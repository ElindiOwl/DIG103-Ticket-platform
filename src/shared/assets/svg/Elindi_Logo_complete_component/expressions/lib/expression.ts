interface Eye {
    leftEyeLines?: string;
    leftEyeSclera?: string;
    leftEyeIris?: string;
    rightEyeLines?: string;
    rightEyeSclera?: string;
    rightEyeIris?: string;
}


export interface Expression extends Eye {
    expressionMouth?: string;
}
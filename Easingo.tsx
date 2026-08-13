export type EasingFunction = (t: number) => number;

export interface EasingLibrary {
    [key: string]: any;
    linear: EasingFunction;

    ease1In: EasingFunction;
    ease1Out: EasingFunction;
    ease1InOut: EasingFunction;

    ease2In: EasingFunction;
    ease2Out: EasingFunction;
    ease2InOut: EasingFunction;

    ease3In: EasingFunction;
    ease3Out: EasingFunction;
    ease3InOut: EasingFunction;

    ease4In: EasingFunction;
    ease4Out: EasingFunction;
    ease4InOut: EasingFunction;

    sineIn: EasingFunction;
    sineOut: EasingFunction;
    sineInOut: EasingFunction;

    circIn: EasingFunction;
    circOut: EasingFunction;
    circInOut: EasingFunction;

    backIn: (s?: number) => EasingFunction;
    backOut: (s?: number) => EasingFunction;
    backInOut: (s?: number) => EasingFunction;

    elasticIn: EasingFunction;
    elasticOut: EasingFunction;
    elasticInOut: EasingFunction;

    bounceOut: EasingFunction;
    bounceIn: EasingFunction;
    bounceInOut: EasingFunction;

    stepsEnd: (steps?: number) => EasingFunction;
    stepsStart: (steps?: number) => EasingFunction;
    steps: (steps?: number) => EasingFunction;

    expoIn: EasingFunction;
    expoOut: EasingFunction;
    expoInOut: EasingFunction;
}

const Easingo: EasingLibrary = {
    linear: (t) => t,

    ease1In: (t) => t * t,
    ease1Out: (t) => 1 - (1 - t) * (1 - t),
    ease1InOut: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),

    ease2In: (t) => t * t * t,
    ease2Out: (t) => 1 - Math.pow(1 - t, 3),
    ease2InOut: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),

    ease3In: (t) => t * t * t * t,
    ease3Out: (t) => 1 - Math.pow(1 - t, 4),
    ease3InOut: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2),

    ease4In: (t) => t * t * t * t * t,
    ease4Out: (t) => 1 - Math.pow(1 - t, 5),
    ease4InOut: (t) => (t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2),

    sineIn: (t) => 1 - Math.cos((t * Math.PI) / 2),
    sineOut: (t) => Math.sin((t * Math.PI) / 2),
    sineInOut: (t) => -(Math.cos(Math.PI * t) - 1) / 2,

    circIn: (t) => 1 - Math.sqrt(1 - Math.pow(t, 2)),
    circOut: (t) => Math.sqrt(1 - Math.pow(t - 1, 2)),
    circInOut: (t) =>
        t < 0.5
            ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2
            : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2,

    backIn: (s = 1.70158) => (t) => (s + 1) * t * t * t - s * t * t,
    backOut: (s = 1.70158) => (t) => 1 + (s + 1) * Math.pow(t - 1, 3) + s * Math.pow(t - 1, 2),
    backInOut: (s = 1.70158) => {
        const c2 = s * 1.525;
        return (t) =>
            t < 0.5
                ? (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
                : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
    },

    elasticIn: (t) => {
        if (t === 0) return 0;
        if (t === 1) return 1;
        return -Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI);
    },
    elasticOut: (t) => {
        if (t === 0) return 0;
        if (t === 1) return 1;
        return Math.pow(2, -10 * t) * Math.sin((t - 0.1) * 5 * Math.PI) + 1;
    },
    elasticInOut: (t) => {
        if (t === 0) return 0;
        if (t === 1) return 1;
        return t < 0.5
            ? -0.5 * Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * ((2 * Math.PI) / 4.5))
            : 0.5 * Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * ((2 * Math.PI) / 4.5)) + 1;
    },

    bounceOut: (t) => {
        const n1 = 7.5625;
        const d1 = 2.75;
        if (t < 1 / d1) {
            return n1 * t * t;
        } else if (t < 2 / d1) {
            return n1 * (t -= 1.5 / d1) * t + 0.75;
        } else if (t < 2.5 / d1) {
            return n1 * (t -= 2.25 / d1) * t + 0.9375;
        } else {
            return n1 * (t -= 2.625 / d1) * t + 0.984375;
        }
    },
    bounceIn(t) {
        return 1 - this.bounceOut(1 - t);
    },
    bounceInOut(t) {
        return t < 0.5
            ? (1 - this.bounceOut(1 - 2 * t)) / 2
            : (1 + this.bounceOut(2 * t - 1)) / 2;
    },

    stepsEnd: (steps = 5) => (t) => {
        const p = Math.max(0, Math.min(1, t));
        return Math.floor(p * steps) / steps;
    },
    stepsStart: (steps = 5) => (t) => {
        const p = Math.max(0, Math.min(1, t));
        return Math.ceil(p * steps) / steps;
    },
    steps: (steps = 5) => (t) => Math.floor(Math.min(t, 0.9999999) * steps) / steps,

    expoIn: (t) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
    expoOut: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    expoInOut: (t) => {
        if (t === 0) return 0;
        if (t === 1) return 1;
        return (t *= 2) < 1
            ? 0.5 * Math.pow(2, 10 * (t - 1))
            : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
    }
};

export default Easingo;
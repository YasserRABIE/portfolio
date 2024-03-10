// header variants
const heroTitleDelay = 1.5;

const slideBottom = {
    initial: {
        y: "-100%",
        opacity: 0,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: heroTitleDelay + 0.3,
            duration: 1.6,
            type: "spring",
        },
    },
};

const chineseTextVariants = {
    hidden: {
        opacity: 1,
        scale: 0.9,
        x: -30,
        lineHeight: 1.4,
    },
    visible: {
        scale: 1,
        x: 0,
        lineHeight: 1,
        transition: {
            delayChildren: heroTitleDelay + 1.2,
            staggerChildren: 0.1,
            delay: 0.2,
            duration: 0.6,
            when: "afterChildren",
        },
    },
};
const linksVariants = {
    hover: {
        scale: 1.35,
        originX: 0,
        transition: {
            duration: 0.3,
            type: "spring",
            stiffness: 120,
        },
    },
    tap: {
        scale: 1.1,
        transition: {
            duration: 0.1,
        },
    },
};

const slideLeft = {
    hidden: {
        x: "150%",
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

// hero variants

const heroTitleContainer = {
    animate: {
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.01,
        },
    },
};
const heroTitle = {
    animate: {
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.05,
        },
    },
};

const rowsContainer = {
    animate: {
        transition: {
            delayChildren: heroTitleDelay + 0.4,
            staggerChildren: 0.3,
        },
    },
};

const container = {
    animate: {
        transition: {
            staggerChildren: 0.04,
        },
    },
};

const wordAnmi = {
    initial: {
        y: "150%",
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.5,
            type: "spring",
            mass: 0.2,
            damping: 20,
            stiffenes: 300,
        },
    },
};
const letterAnmi = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.2,
            type: "spring",
            mass: 0.2,
            damping: 20,
            stiffenes: 300,
        },
    },
};

export {
    slideBottom,
    slideLeft,
    chineseTextVariants,
    linksVariants,
    heroTitle,
    heroTitleContainer,
    rowsContainer,
    container,
    letterAnmi,
    wordAnmi,
};

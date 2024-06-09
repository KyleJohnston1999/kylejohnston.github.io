let timeout: ReturnType<typeof setTimeout>;
let hasExecutedWithinTimeFrame = false;

export const arrowClick = (direction: number) => {
    if (!hasExecutedWithinTimeFrame) {
        if (!window.visualViewport) return;
        const currentPage = window.visualViewport ? Math.floor(window.scrollY / window.visualViewport.height) : 0;
        const top = (currentPage+(direction * 1))*window.visualViewport.height;
        window.scrollTo({top: top, behavior: 'smooth'});

        hasExecutedWithinTimeFrame = true;
        timeout = setTimeout(() => {
            hasExecutedWithinTimeFrame = false
    
        }, 600);
    }
}


export const includeDownArrowFunctionality = (event: KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
        event.preventDefault();
        arrowClick(1);
    }
}

export const includeUpArrowFunctionality = (event: KeyboardEvent) => {
    if (event.key ==='ArrowUp') {
        event.preventDefault();
        arrowClick(-1);
    }
}
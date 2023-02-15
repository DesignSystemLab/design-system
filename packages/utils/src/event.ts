import type { EventType } from './eventTypes';

export const callHandler = <T extends (event: EventType) => void>(defaultHandler: T, handler: T | undefined) => {
    return (event: EventType) => {
        defaultHandler?.(event);
        handler?.(event);
    };
};

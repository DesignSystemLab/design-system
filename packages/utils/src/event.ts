import type { EventType } from './eventTypes';

export const callHandler = <T extends (event: EventType) => void | undefined>(defaultHandler: T, handler: T) => {
    return (event: EventType) => {
        defaultHandler?.(event);
        handler?.(event);
    };
};

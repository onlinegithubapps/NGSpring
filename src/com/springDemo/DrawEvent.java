package com.springDemo;

import org.springframework.context.ApplicationEvent;

public class DrawEvent extends ApplicationEvent {

    /**
     * Create a new ApplicationEvent.
     *
     * @param source the object on which the event initially occurred (never {@code null})
     */
    public DrawEvent(Object source) {
        super(source);
    }

    @Override
    public String toString() {
        return "DrawEvent{} event occurred";
    }
}

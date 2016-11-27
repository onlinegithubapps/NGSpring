package com.springDemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.ApplicationEventPublisherAware;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/*@Component*/
@Service
public class Circle implements Shape, ApplicationEventPublisherAware {
    private Point center;
    @Autowired
    private MessageSource messageSource;

    private ApplicationEventPublisher publisher;

    public Point getCenter() {
        return center;
    }

    /*@Required*/
    /*@Autowired
    @Qualifier("circleRelated")*/
    @Resource
    public void setCenter(Point center) {
        this.center = center;
    }

    public MessageSource getMessageSource() {
        return messageSource;
    }

    public void setMessageSource(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    public void draw() {
        System.out.println(" Circle point is: " + center.getX() + " " + center.getY());
        System.out.println(messageSource.getMessage("greeting", null, "default message", null));
        DrawEvent drawEvent = new DrawEvent(this);
        publisher.publishEvent(drawEvent);
    }

    public void setApplicationEventPublisher(ApplicationEventPublisher applicationEventPublisher) {
        this.publisher = applicationEventPublisher;
    }
}

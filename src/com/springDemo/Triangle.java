package com.springDemo;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

import java.util.List;

public class Triangle implements InitializingBean, DisposableBean, Shape{

    private ApplicationContext applicationContext = null;//lot of other awares

   /* private List<Point> points;

    public List<Point> getPoints() {
        return points;
    }

    public void setPoints(List<Point> points) {
        this.points = points;
    }*/

   private Point pointA;
   private Point pointB;
   private Point pointC;

    public Point getPointA() {
        return pointA;
    }

    public void setPointA(Point pointA) {
        this.pointA = pointA;
    }

    public Point getPointB() {
        return pointB;
    }

    public void setPointB(Point pointB) {
        this.pointB = pointB;
    }

    public Point getPointC() {
        return pointC;
    }

    public void setPointC(Point pointC) {
        this.pointC = pointC;
    }

    public void draw() {
        System.out.println(" Triangle point {" + this.pointA.getX() + ", " + this.pointA.getY() + "}");
        System.out.println(" Triangle point {" + this.pointB.getX() + ", " + this.pointB.getY() + "}");
        System.out.println(" Triangle point {" + this.pointC.getX() + ", " + this.pointC.getY() + "}");
    }

    public void destroy() throws Exception {
        System.out.println("Disposing bean");
    }

    public void afterPropertiesSet() throws Exception {
        System.out.println("Initializing bean");
    }

    public void myInit() {
        System.out.println("myInit()");
    }

    public void cleanUp() {
        System.out.println("cleanUp()");
    }
}

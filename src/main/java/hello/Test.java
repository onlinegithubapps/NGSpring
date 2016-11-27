package hello;

import org.springframework.stereotype.Component;

import javax.inject.Inject;

@Component
public class Test {
    private Test1 test1;

    public Test() {

    }

    @Inject
    public Test(Test1 test1) {
        this.test1 = test1;
    }

    public String getTest() {
        return test1.getTest1();
    }
}

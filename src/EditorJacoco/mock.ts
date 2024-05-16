export const mock = `package org.example;

public class Add {
    public int add(int x ,int y){
        int i = 0;
        if (i == 0) {
            i++;
        } else {
            i--;
        }
        return x + y;
    }
    public int sub(int x ,int y){
        return x - y;
    }
    public int div(int x ,int y){
        return x / y;
    }
}
`
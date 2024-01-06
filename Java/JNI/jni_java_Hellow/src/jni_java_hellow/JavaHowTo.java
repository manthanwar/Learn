/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package jni_java_hellow;

/**
 *
 * @author Amit
 */
class JavaHowTo {

    public native String sayHello();

    static {
        System.loadLibrary("javahowto");
    }
}

#include <jni.h>
#include <stdio.h>
//#include "HelloWorldNative.h"
#include "JavaHowTo.h"

JNIEXPORT jstring JNICALL Java_JavaHowTo_sayHello
  (JNIEnv *env, jobject obj) {
    return  env->NewStringUTF("Hello world");
}

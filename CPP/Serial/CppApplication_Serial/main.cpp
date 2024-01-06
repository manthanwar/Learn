/* 
 * File:   main.cpp
 * Author: Amit
 *
 * Created on 27 December, 2010, 12:02 AM
 */

#include "SerialComm.h"

/*
 * 
 */
int main(int argc, char** argv) {


    printf("Welcome to Process Automation Laboratory!!!\n");

    SerialComm myCom;

    myCom.initialize_Serial_Communication("COM15");

    bool portExist = myCom.open_Serial_Port();
    myCom.configure_Serial_Port();

    if (portExist) {
        while (1) {
            // Application-specific tasks.
            myCom.read_Serial_Data();
            myCom.write_Serial_Data();
        }//end while
    }

    return (EXIT_SUCCESS);
}




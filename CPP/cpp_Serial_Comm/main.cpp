/* 
 * File:   main.cpp
 * Author: Amit
 *
 * Created on 6 December, 2011, 2:25 AM
 */

#include <stdlib.h>
#include <stdio.h>
#include <iostream>
#include <string.h>

//#include <commdlg.h>
#include <windows.h>
//#include <windef.h>

#include <time.h>

#define READ_TIMEOUT 500
using namespace std;

void wait(int seconds) {
    clock_t endwait;
    endwait = clock() + seconds * CLOCKS_PER_SEC;
    while (clock() < endwait) {
    }
}

/*
 * 
 */
int main(int argc, char** argv) {

    cout << "Hello!" << endl;
    cout << "Welcome to PAL Serial Communication!!" << endl;

    HANDLE hSerial;
    COMMTIMEOUTS timeouts;
    COMMCONFIG dcbSerialParams;
    DWORD dwBytesWritten, dwBytesRead;
    std::string comPortName = "com1";
    std::string words, buffRead, buffWrite;
    DWORD nread, nwrite;
    //uint8_t *bufferRead;
    //uint8_t *bufferWrite;
    LPVOID bufferRead; //A pointer to any type.
    //LPCVOID bufferWrite; //A pointer to a constant of any type.
    bool openSuccess = false;
    //char portName [5] = "COM1";
    time_t timeStarted, timeStopped, timeElapsed;




    cout << "Hi to COM Port - " << comPortName.c_str() << endl;

    hSerial = ::CreateFile(comPortName.c_str(),
            GENERIC_READ | GENERIC_WRITE, 0, NULL,
            OPEN_EXISTING, 0, NULL);
    if (hSerial != INVALID_HANDLE_VALUE) {
        std::cout << comPortName.c_str() << std::endl;
        std::cout << "Success!!" << std::endl;
        //cout << port_number << endl;
        //MessageBox(NULL, "Serial port opened successfully", "Error", MB_OK | MB_ICONINFORMATION);
        openSuccess = true;

    } else {
        DWORD err = GetLastError();
        if (err == ERROR_FILE_NOT_FOUND) {
            std::cout << "Failed!! Port not Found" << std::endl;
        }
        if (err == ERROR_ACCESS_DENIED || err == ERROR_SHARING_VIOLATION) {
            std::cout << comPortName << std::endl;
            std::cout << "Failed!!" << std::endl;
            printf(" serial port does not exist \n");

            MessageBox(NULL, "Serial port does not exist", "Error", MB_OK | MB_ICONERROR);
        }
    }

    // Configure
    if (openSuccess) {
        if (!GetCommState(hSerial, &dcbSerialParams.dcb)) {
            printf("error getting state \n");
        }

        dcbSerialParams.dcb.DCBlength = sizeof (dcbSerialParams.dcb);


        dcbSerialParams.dcb.BaudRate = CBR_9600;
        dcbSerialParams.dcb.ByteSize = 8;
        dcbSerialParams.dcb.StopBits = ONESTOPBIT; //ONE5STOPBITS;//ONESTOPBIT;
        dcbSerialParams.dcb.Parity = NOPARITY;

        //        dcbSerialParams.dcb.fBinary = TRUE;
        //        dcbSerialParams.dcb.fDtrControl = DTR_CONTROL_DISABLE;
        //        dcbSerialParams.dcb.fRtsControl = RTS_CONTROL_DISABLE;
        //        dcbSerialParams.dcb.fOutxCtsFlow = FALSE;
        //        dcbSerialParams.dcb.fOutxDsrFlow = FALSE;
        //        dcbSerialParams.dcb.fDsrSensitivity = FALSE;
        //        dcbSerialParams.dcb.fAbortOnError = TRUE;

        if (!SetCommState(hSerial, &dcbSerialParams.dcb)) {
            printf(" error setting serial port state \n");
            MessageBox(NULL, "Parameters Not Set", "Configuration", MB_OK | MB_ICONERROR);
            return FALSE;
        }



        //
        //        GetCommTimeouts(hSerial, &timeouts);
        //        //COMMTIMEOUTS timeouts = {0};
        //
        //        timeouts.ReadIntervalTimeout = 50;
        //        timeouts.ReadTotalTimeoutConstant = 50;
        //        timeouts.ReadTotalTimeoutMultiplier = 10;
        //        timeouts.WriteTotalTimeoutConstant = 50;
        //        timeouts.WriteTotalTimeoutMultiplier = 10;
        //
        //        if (!SetCommTimeouts(hSerial, &timeouts)) {
        //            printf("error setting port state \n");
        //            return FALSE;
        //        }

    }
    //


    //
    //***************Read Operation******************//
    if (openSuccess) {
        //while (1) {
        for (int i = 0; i < 10; i++) {
            //bufferRead = 0;
            //dwBytesRead = 0;
            //nread =  words.length(); //strlen(words);
            nread = sizeof (bufferRead); //READ_BUF_SIZE;
            //nread = size(dwBytesRead_

            unsigned long read_nbr;

            read_nbr = 0;

            //if (!ReadFile(hSerial, bufferRead, nread, &dwBytesRead, NULL)) {
            if (!ReadFile(hSerial, bufferRead, nread, &read_nbr, NULL)) {
                printf("error reading from input buffer \n");
                return FALSE;
            }
            //printf("Data read from read buffer is \n %s \n", bufferRead);
            for (i = 0; i < nread; i++) {
              //  printf("readdd = %c", bufferRead[i]);
            }
            std::cout << " Read = " << bufferRead << " -- bytes Read = " << dwBytesRead << std::endl;

            Sleep(1000);
            //wait(10);

        }
    } else {
        std::cout << " Data Not Read. " << std::endl;
    }

    if (openSuccess) {
        CloseHandle(hSerial);
        std::cout << " Port Closed. " << std::endl;
    }

    return (EXIT_SUCCESS);
}




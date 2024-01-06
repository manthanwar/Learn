/* 
 * File:   SerialComm.cpp
 * Author: Amit
 * 
 * Created on 3 June, 2011, 6:11 PM
 */

#include <string>


#include "SerialComm.h"

SerialComm::SerialComm() {

}

SerialComm::SerialComm(const SerialComm& orig) {
}

bool SerialComm::initialize_Serial_Communication(std::string givenPortName) {
    comPortName = givenPortName;
}

//    for (port_number = 1; port_number < 256; ++port_number) {
    //        port_number < 10 ?
    //                sprintf(port_name, "COM%d", port_number) :
    //                sprintf(port_name, "\\\\.\\COM%d", port_number);
    //
    //        HANDLE hFile = ::CreateFile(port_name,
    //                GENERIC_READ | GENERIC_WRITE, 0, NULL,
    //                OPEN_EXISTING, 0, NULL);
    //        if (hFile != INVALID_HANDLE_VALUE) {
    //            std::cout << port_name << std::endl;
    //            std::cout << "Success!!" << std::endl;
    //            cout << port_number << endl;
    //            break;
    //        } else {
    //            DWORD err = GetLastError();
    //            if (err == ERROR_ACCESS_DENIED || err == ERROR_SHARING_VIOLATION) {
    //                std::cout << port_name << std::endl;
    //                std::cout << "Failed!!" << std::endl;
    //            }
    //        }
    //        CloseHandle(hFile);
    //    }

bool SerialComm::open_Serial_Port() {
    //        AfxMessageBox("Simple message box.");

    //hSerial = CreateFile(comPortName.c_str(),
    hSerial = CreateFile("COM15",
            GENERIC_READ | GENERIC_WRITE,
            0,
            NULL,
            OPEN_EXISTING,
            FILE_ATTRIBUTE_NORMAL, //FILE_FLAG_OVERLAPPED, // FILE_ATTRIBUTE_NORMAL
            NULL);

    cout << comPortName << endl;
    
    if (hSerial == INVALID_HANDLE_VALUE) {
        if (GetLastError() == ERROR_FILE_NOT_FOUND) {
            printf(" serial port does not exist \n");
            MessageBox(NULL, "Serial port does not exist", "Error", MB_OK | MB_ICONERROR);
        }
        printf("some other error occured. \n");
        string msg = "Some error occured";

        char szFileName[MAX_PATH];
        HINSTANCE hInstance = GetModuleHandle(NULL);
        GetModuleFileName(hInstance, szFileName, MAX_PATH);
        msg = msg.append(szFileName);
        MessageBox(NULL, "Hello", "Error", MB_OK | MB_ICONERROR);
        return FALSE;
    }

    return TRUE;
}

bool SerialComm::configure_Serial_Port() {
    if (!GetCommState(hSerial, &dcbSerialParams.dcb)) {
        printf("error getting state \n");
    }

    dcbSerialParams.dcb.DCBlength = sizeof (dcbSerialParams.dcb);


    dcbSerialParams.dcb.BaudRate = CBR_9600;
    dcbSerialParams.dcb.ByteSize = 8;
    dcbSerialParams.dcb.StopBits = ONESTOPBIT;
    dcbSerialParams.dcb.Parity = NOPARITY;

    dcbSerialParams.dcb.fBinary = TRUE;
    dcbSerialParams.dcb.fDtrControl = DTR_CONTROL_DISABLE;
    dcbSerialParams.dcb.fRtsControl = RTS_CONTROL_DISABLE;
    dcbSerialParams.dcb.fOutxCtsFlow = FALSE;
    dcbSerialParams.dcb.fOutxDsrFlow = FALSE;
    dcbSerialParams.dcb.fDsrSensitivity = FALSE;
    dcbSerialParams.dcb.fAbortOnError = TRUE;

    if (!SetCommState(hSerial, &dcbSerialParams.dcb)) {
        printf(" error setting serial port state \n");
        return FALSE;
    }


    GetCommTimeouts(hSerial, &timeouts);
    //COMMTIMEOUTS timeouts = {0};

    timeouts.ReadIntervalTimeout = 50;
    timeouts.ReadTotalTimeoutConstant = 50;
    timeouts.ReadTotalTimeoutMultiplier = 10;
    timeouts.WriteTotalTimeoutConstant = 50;
    timeouts.WriteTotalTimeoutMultiplier = 10;

    if (!SetCommTimeouts(hSerial, &timeouts)) {
        printf("error setting port state \n");
        return FALSE;
    }
    return TRUE;
}

bool SerialComm::read_Serial_Data() {
    //***************Read Operation******************//
    //buffRead = 0;
    dwBytesRead = 0;
    nread = words.length(); //strlen(words);

    if (!ReadFile(hSerial, bufferRead, nread, &dwBytesRead, NULL)) {
        printf("error reading from input buffer \n");
        return FALSE;
    }
    printf("Data read from read buffer is \n %s \n", bufferRead);

    return TRUE;
}

bool SerialComm::write_Serial_Data() {
    //****************Write Operation*********************//
    words = "PAL on COM1";
    nwrite = words.length(); //strlen(words);

    bufferWrite = words.c_str();
    dwBytesWritten = 0;

    if (!WriteFile(hSerial, bufferWrite, nwrite, &dwBytesWritten, NULL)) {
        printf("error writing to output buffer \n");
        std::cout << GetLastError() << std::endl;
        return FALSE;

    }
    printf("Data written to write buffer is \n %s \n", bufferWrite);
    return TRUE;
}

void SerialComm::write_TextFile(std::string fileName) {

    //    ofstream: Stream class to write on files
    //    ifstream: Stream class to read from files
    //    fstream: Stream class to both read and write from/to files.


    ofstream myfile;
    myfile.open(fileName.c_str(), ios::out | ios::app | ios::binary);
    myfile << "Writing this to a file.\n";
    myfile.close();
    return;
}

bool SerialComm::close_Serial_Port() {
    CloseHandle(hSerial);
}

SerialComm::~SerialComm() {
}


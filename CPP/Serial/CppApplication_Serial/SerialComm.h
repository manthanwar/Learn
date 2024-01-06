/* 
 * File:   SerialComm.h
 * Author: Amit
 *
 * Created on 3 June, 2011, 6:11 PM
 */

#ifndef _SERIALCOMM_H
#define	_SERIALCOMM_H

#include <stdlib.h>
#include <iostream>
#include <stdio.h>
#include <windows.h>
#include <string>
#include <fstream>
using namespace std;

class SerialComm {
public:
    SerialComm();

    SerialComm(const SerialComm& orig);


    bool initialize_Serial_Communication(std::string givenPortName) ;
    bool configure_Serial_Port();
    bool read_Serial_Data();
    bool write_Serial_Data();
    bool open_Serial_Port();
    bool close_Serial_Port();

    void write_TextFile(std::string fileName);//("example.txt");


    virtual ~SerialComm();

private:

    HANDLE hSerial;
    COMMTIMEOUTS timeouts;
    COMMCONFIG dcbSerialParams;
    DWORD dwBytesWritten, dwBytesRead;
    std::string comPortName;
    std::string words, buffRead, buffWrite;
    DWORD nread, nwrite;
    //uint8_t *bufferRead;
    //uint8_t *bufferWrite;
    LPVOID bufferRead; //A pointer to any type.
    LPCVOID bufferWrite; //A pointer to a constant of any type.


};

#endif	/* _SERIALCOMM_H */


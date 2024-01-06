/* 
 * File:   main.cpp
 * Author: Amit
 *
 * Created on 31 May, 2011, 3:49 PM
 */

#include <stdlib.h>
#include <stdio.h>
#include <iostream>
#include <time.h>
#include <math.h>
/*
 * 
 */
int main(int argc, char** argv) {

    time_t timeStarted, timeStopped, timeElapsed;






    printf("Time Started!");

    timeStarted = clock();
    int AAA,BBB,CCC;
    AAA = 10000;
    BBB = 1000 * AAA;
    for (int i = 0; i < 10000000; i++) {

        CCC = AAA * BBB;


    }



    timeStopped = clock();


    timeElapsed = timeStopped - timeStarted;

    printf("Time Started = %d\n",timeStarted);
    printf("Time Stopped = %d\n",timeStopped);
    printf("Time Elapsed = %d\n",timeElapsed);




    return (EXIT_SUCCESS);
}

void wait ( int seconds )
{
  clock_t endwait;
  endwait = clock () + seconds * CLOCKS_PER_SEC ;
  while (clock() < endwait) {}
}
/* 
 * File:   Control_PID.h
 * Author: Amit
 *
 * Created on 3 June, 2011, 6:28 PM
 */

#ifndef _CONTROL_PID_H
#define	_CONTROL_PID_H

class Control_PID {
public:
    Control_PID();
    Control_PID(const Control_PID& orig);


    void control_pid_p(double KcK);
    void control_pid_pi(double KcK, double tauI);
    void control_pid_pid(double KcK, double tauI, double tauD);

    void control_clqr(double QQQ, double RRR);
    void control_dlqr(double QQQ, double RRR);


    virtual ~Control_PID();
private:

};

#endif	/* _CONTROL_PID_H */


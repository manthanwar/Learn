#!/bin/bash

# for n in {1..5..2}; 
# do
#     echo $n
# done


# # bg=101
# for bg in {40..47}; 
# # for bg in {48,108}; 
# do
#     # for fg in {30..37}; 
#     for fg in {30..32..3}; 
#     do
#         # echo $n
#         # printf "Hi FG = $fg ==> BG = $bg \033[0;${fg};${bg}m Amit \033[0m Howdy Do\n"
#         printf "Hi FG = $fg ==> BG = $bg \033[1;${bg};${fg}m Amit \033[0m Howdy Do\n"
#     done
#     # printf '\n'
# done

function colorFgRange {
    for fg in {30..37}; 
    do
        # for bg in {100..107}; 
        for bg in {40..47}; 
        do
            printf "Hi FG = $fg ==> BG = $bg \033[0;${bg};${fg}m Amit \033[0m Howdy Do\n"
        done
        printf '\n'
    done
}

function colorFgRangeNinety {
    for fg in {90..97}; 
    do
        for bg in {100..107}; 
        do
            printf "Hi FG = $fg ==> BG = $bg \033[1;${bg};${fg}m Amit \033[0m Howdy Do\n"
        done
        printf '\n'
    done
}

function colorFgBlackVsRed {
    for fg in 30 31
    do
        for bg in {100..107}; 
        do
            printf "Hi FG = $fg ==> BG = $bg \033[0;${bg};${fg}m Amit \033[0m Howdy Do\n"
        done
        printf '\n'
    done
}

# colorFgBlackVsRed
colorFgRange

printf 'Welcome: %s\n' "name" "esurname"
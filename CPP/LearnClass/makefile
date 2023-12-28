-include terminalColors.txt

# origin = helloworld
origin := main
output := Out
source := Src
market := Dist

# sources := = $(shell find $(source) -iname "*.cpp")

# parentname="$(basename "$(dirname "$originpath")")"
# echo "$parentname"

.PHONY: all
all: clean ${origin}.exe run

${origin}.o: ${origin}.cpp
	 g++ -c $<

${origin}.exe: ${origin}.o
	 g++ -o $@ $<

.PHONY: clean
clean:
	 rm -f ${origin}.o ${origin}.exe
	 echo Clean done

run: ${origin}.exe
	./${origin}
	printf "My Program ${colorRedBold} \xe2\x88\xb4 \x20 Terminated${colorNo} \xe2\x88\xb0 \x20 \xe0\xa5\x90 \x20 Successfully!"
	printf '\a'
	sleep 2
	echo -ne '\007'
	sleep 2
	printf '\a'
	echo -ne '\007'
	printf '\a'
	echo -ne '\007'
	printf '\a'


colors:
	printf "Program ${colorRedBg} Terminated ${colorNo} \xe0\xa5\x90 \x20 Successfully!"

# echo My Program \033[0;31m Terminated\033[0m Successfully!

# cleanbuild:clean ${origin}.exe

# GNU make also has -s, --silent, --quiet options to quieten globally
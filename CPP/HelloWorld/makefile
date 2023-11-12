# file = helloworld
file = fun_decimal_to_binary

all: ${file}.exe run

${file}.exe: ${file}.o
	 g++ -o $@ $<

${file}.o: ${file}.cpp
	 g++ -c $<
     
clean:
	 rm ${file}.o ${file}.exe
	 echo Clean done

run:
	./${file}

# GNU make also has -s, --silent, --quiet options to quieten globally 
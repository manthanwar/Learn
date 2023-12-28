# C++ Programming Using gcc and g++

## Compiler Standard

Compiler standard on [Stakoverflow](https://stackoverflow.com/questions/34836775/compiler-standards-support-c11-c14-c17)

```bash
gcc -v --help 2> /dev/null | sed -n '/^ *-std=\([^<][^ ]\+\).*/ {s//\1/p}'
```

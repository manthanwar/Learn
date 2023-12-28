cmake_minimum_required(VERSION 3.22.1)
project(CMakeHello)
message("Hello, CMake!")
message("This is a ${CMAKE_SYSTEM_NAME} system")
message("CXX Standard: ${CMAKE_CXX_STANDARD}")
set(CMAKE_CXX_STANDARD 14)
message("CXX Standard SET: ${CMAKE_CXX_STANDARD}")
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall")

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)

# Disable in-source builds to prevent source tree corruption.
# if("${CMAKE_SOURCE_DIR}" STREQUAL "${CMAKE_BINARY_DIR}")
#   message(FATAL_ERROR "
#   FATAL: In-source builds are not allowed.
#          You should create a separate directory for build files.
# ")
# endif()

add_executable(cmake_hello hello-auto.cpp)


# cmake -H. -Bbuild
# H indicates source directory
# B indicates build directory
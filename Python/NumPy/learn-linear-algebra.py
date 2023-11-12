import numpy as np
from numpy import linalg as la

a = np.diag((1, 2, 3))

print(a)


eigenvalues, eigenvectors = la.eig(a)

print(eigenvalues)

print(eigenvectors)

c = la.cholesky(a)

print(c)
print(c.T)
print(c*c.T)

U, S, Vh = la.svd(a)

print('U = ', U)
print('S = ', S)
print('V = ', Vh)
print('Vc = ', Vh.T)

Q,R = la.qr(a)

print('Q = ', Q)
print('R = ', R)


# pip install ortools

# python -m pip install --upgrade ortools


import sys

is_64bits = sys.maxsize > 2**32
print(is_64bits)

if is_64bits:
    print('Python is running as 64-bit application')
else:
    print('Python is running as 32-bit application')

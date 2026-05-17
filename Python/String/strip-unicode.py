from unidecode import unidecode

aa = unidecode('kožušček')
print(aa)
# 'kozuscek'

aa = unidecode('北亰')
print(aa)
# 'Bei Jing '

aa = unidecode('François')
print(aa)
# 'Francois'


aa = unidecode("čěňř")
print(aa)


def deUnicode(old_str):
  print("Hello from a function")
  accChars = "čěňřŠŽšžŸÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïðñòóôõöùúûüýÿ"
  repChars = "cenrSZszYAAAAAACEEEEIIIIDNOOOOOUUUUYaaaaaaceeeeiiiidnooooouuuuyy"
  new_str = old_str
  for i in range(len(accChars)):
    new_str = new_str.replace(accChars[i], repChars[i])
  return new_str


def deCzech(old_str):
  accChars = "áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ"
  repChars = "acdeeinorstuuyzACDEEINORSTUUYZ"
  new_str = old_str
  for i in range(len(accChars)):
    new_str = new_str.replace(accChars[i], repChars[i])
  return new_str

new_str = deUnicode('čěňříýÚ')
print(new_str)


# for letter in accChars:
#     accList.append(letter)

# for letter in repChars:
#     repList.append(letter)

# # print(accList, repList)


# oldstr = 'aaačěňř'
# oldstr = 'aaa'
# newstr = ''
# # newstr = ''oldstr.replace(val, rep)''

# for i in range(len(accList)):
#   val = accList[i]
#   rep = repList[i]
#   print(i, val, rep)
#   # print(oldstr)
#   newstr = oldstr.replace(str(val), str(rep))
#   # print(newstr)


# print(oldstr, ' = ', newstr)

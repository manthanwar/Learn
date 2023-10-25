# Create DataFrame
import pandas as pd
studentdetails = {
       "Studentname":["Ram", "Sam", "Scott", "Ann", "John"],
       "Mathematics" :[80,90,85,70,95],
       "Science" :[85,95,80,90,75],
       "English" :[90,85,80,70,95]
              }
index_labels=['r1','r2','r3','r4','r5']
df = pd.DataFrame(studentdetails ,index=index_labels)
print(df)


# Using sum() to Sum the rows of each column
df1 = df.sum()
print(df1)

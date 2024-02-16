import pandas as pd

#input CSV file path
input_csv_path = r"C:\Users\justi\Downloads\vehicles-2024-02-12.csv"

# output CSV file path
output_csv_path = r"C:\Users\justi\Downloads\output.csv"


# Read input CSV file
df = pd.read_csv(input_csv_path)

# Merge "Manufacturer" and "Model" into a new "Name" column
df['Name'] = df['Manufacturer'] + ', ' + df['Model']

# Create two new and empty columns
df['Price'] = pd.NA
df['Image'] = pd.NA


# Specify the list of columns I want to keep in the output file
columns_to_keep = ['Name', 'All-Electric Range', 'Engine Size', 'Price', 'Image']


# Select only specified columns
df_selected = df[columns_to_keep]

# Drop rows with  empty values
df_selected = df_selected.dropna(subset=['Name', 'All-Electric Range', 'Engine Size'])

# Write selected columns to the output CSV file
df_selected.to_csv(output_csv_path, index=False)

# Print if successful
print("CSV file has been processed and output file is saved.")

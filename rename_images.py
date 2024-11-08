import os

# Pfad zu deinem Bilderordner
folder_path = r"D:\Schule\BBW\Module\3.Jahr\5.Semester\Prog2Cavuoti\Workspace\bildergalerie\public\images"

# Liste aller Dateien im Ordner
files = os.listdir(folder_path)

# Für jede Datei einen neuen Namen vergeben (1.jpg, 2.jpg, usw.)
for index, filename in enumerate(files):
    name, ext = os.path.splitext(filename)  # Trennt Dateinamen und -endung
    new_filename = f"{index + 1}{ext}"  # Nummerierung ab 1
    old_file_path = os.path.join(folder_path, filename)
    new_file_path = os.path.join(folder_path, new_filename)

    os.rename(old_file_path, new_file_path)
    print(f"{filename} umbenannt zu {new_filename}")

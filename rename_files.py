import os

def rename_files_in_folder(folder_path, start_index=1):
    # Liste aller Dateien im Ordner
    files = os.listdir(folder_path)

    # Jeder Datei einen neuen Namen vergeben (z.B. 1.mp4, 2.jpg, usw.)
    for index, filename in enumerate(files):
        name, ext = os.path.splitext(filename)  # Trennt Dateinamen und -endung
        new_filename = f"{index + start_index}{ext}"  # Nummerierung ab start_index
        old_file_path = os.path.join(folder_path, filename)
        new_file_path = os.path.join(folder_path, new_filename)

        os.rename(old_file_path, new_file_path)
        print(f"{filename} umbenannt zu {new_filename}")

# Ordnerpfade definieren
video_folder_path = r"D:\Schule\BBW\Module\3.Jahr\5.Semester\Prog2Cavuoti\Workspace\bildergalerie\public\videos"
image_folder_path = r"D:\Schule\BBW\Module\3.Jahr\5.Semester\Prog2Cavuoti\Workspace\bildergalerie\public\images"

# Funktion für jeden Ordner aufrufen
rename_files_in_folder(video_folder_path)
rename_files_in_folder(image_folder_path)

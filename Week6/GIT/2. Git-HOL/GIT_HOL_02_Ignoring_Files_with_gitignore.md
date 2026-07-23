# Git HOL 2 – Ignoring Files Using .gitignore

## 1. Objective

The objective of this exercise was to understand what `.gitignore` is used for and how it helps in ignoring unwanted files and folders so that they don't get tracked or committed to the repository.

## 2. Overview

In this exercise, I created a `.log` file and a folder named `log` inside my working directory, and then updated the `.gitignore` file so that Git would ignore both of them. After that, I checked the Git status to confirm that these files were no longer showing up as untracked.

## 3. Tools and Technologies Used

* Git
* Git Bash
* GitLab (remote repository)
* Notepad++ (used earlier as the default editor)

## 4. Prerequisites

* Git environment already set up on the machine
* Notepad++ configured as the default editor
* A local Git repository connected to a remote GitLab repository

## 5. Steps Performed

1. Opened the existing Git repository (from the previous exercise) in Git Bash.
2. Created a new file with a `.log` extension inside the working directory.
3. Created a new folder named `log` inside the same directory.
4. Checked `git status` to confirm both the file and folder were showing up as untracked.
5. Created or updated the `.gitignore` file to add rules for ignoring `.log` files and the `log` folder.
6. Checked `git status` again to verify that Git was no longer showing these as untracked.
7. Confirmed that the working directory, local repository, and Git status were all consistent with each other.

## 6. Git Commands Used

```bash
touch sample.log
```
This creates a new empty file with a `.log` extension in the working directory.

```bash
mkdir log
```
This creates a new folder named `log` in the working directory.

```bash
git status
```
This shows the current state of the working directory, including any new files or folders that Git hasn't started tracking yet.

```bash
notepad++ .gitignore
```
This opens the `.gitignore` file in Notepad++ so I could add the rules for ignoring files.

Inside `.gitignore`, I added:

```
*.log
log/
```

The first line tells Git to ignore any file ending with `.log`. The second line tells Git to ignore the entire `log` folder and everything inside it.

```bash
git status
```
Ran this again after saving `.gitignore` to confirm the ignored files and folder no longer appeared as untracked.

## 7. Implementation / Execution

I first created a `.log` file and a `log` folder to simulate files that we normally wouldn't want in a repository — things like log files that get generated automatically and don't need version control. When I ran `git status` before making any changes, both of these showed up as untracked, which meant Git was ready to track them if I added them.

To stop this, I opened the `.gitignore` file and added two simple rules: one to ignore any file with a `.log` extension, and another to ignore the `log` folder completely. Once I saved the file and ran `git status` again, both the `.log` file and the `log` folder disappeared from the list of untracked files. This confirmed that `.gitignore` was working as expected.

## 8. Output / Result

After updating `.gitignore`, running `git status` no longer showed the `.log` file or the `log` folder as untracked. This meant Git successfully ignored them and they would not be added or committed by mistake.

[Add Screenshot of the Final Output Here]

## 9. Key Learning

* Understood the purpose of the `.gitignore` file in a Git repository.
* Learned how to write simple ignore patterns like `*.log` and folder-based ignores like `log/`.
* Learned that `.gitignore` only affects untracked files — it won't remove files that are already being tracked.
* Understood how `git status` can be used to confirm whether ignore rules are working correctly.

## 10. Conclusion

This exercise helped me understand how to keep unwanted files like logs out of version control using `.gitignore`. This is something I'll definitely use in real projects to avoid cluttering the repository with unnecessary files. The exercise was completed successfully.

## GitHub Repository

**Repository:** CTS-DeepSkilling

**Repository URL:** https://github.com/Ashwin-2006-t/CTS-DeepSkilling.git

**Folder/Path:** D:\ASHWIN\Ashwin Programing\JAVA Spring Boot\intelij idea\CTS-Deepskilling\Week6\GIT\2. Git-HOL

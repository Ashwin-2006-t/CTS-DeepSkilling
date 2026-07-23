# Git HOL 1 – Git Setup, Configuration and First Commit

## 1. Objective

The main objective of this exercise was to get comfortable with the basic Git commands like `git init`, `git status`, `git add`, `git commit`, `git push`, and `git pull`. Along with this, I also had to set up Git on my machine and configure Notepad++ as the default editor for Git.

## 2. Overview

In this exercise, I configured Git on my system for the first time, set Notepad++ as my default Git editor, and then created a small project called "GitDemo". I added a file to it, committed the changes, and pushed everything to a remote repository on GitLab.

## 3. Tools and Technologies Used

* Git
* Git Bash
* GitLab (remote repository)
* Notepad++ (as the default editor for Git)

## 4. Prerequisites

* Git Bash client installed on the machine
* A GitLab account to create the remote repository

## 5. Steps Performed

1. Signed up on GitLab and created a new project named **GitDemo**.
2. Checked whether Git was installed properly on my machine.
3. Configured my username and email at the global level so that Git could tag my commits correctly.
4. Verified that the configuration was saved properly.
5. Checked if Notepad++ could be opened directly from Git Bash.
6. Added the path of `notepad++.exe` to the environment variables since Git Bash was not recognizing it initially.
7. Created an alias for Notepad++ so I could open it quickly from Git Bash.
8. Set Notepad++ as the default editor for Git using the config command.
9. Verified the editor setting using the `-e` option.
10. Initialized a new local repository named **GitDemo**.
11. Created a file `welcome.txt` and added some content to it.
12. Checked the status of the working directory to see the untracked file.
13. Added the file to the staging area so Git could start tracking it.
14. Committed the file with a multi-line commit message using Notepad++.
15. Verified that the working directory and local repository were in sync.
16. Connected the local repository to the GitLab remote repository.
17. Pulled from the remote repository first, then pushed my local changes to it.

## 6. Git Commands Used

```bash
git --version
```
This checks whether Git is installed on the machine and shows the version if it is.

```bash
git config --global user.name "your-username"
git config --global user.email "your-email@example.com"
```
These commands set up the username and email that Git will attach to every commit I make.

```bash
git config --list
```
This shows all the current Git configuration values, so I could confirm my username and email were saved correctly.

```bash
git config --global core.editor "notepad++.exe -multiInst -nosession"
```
This sets Notepad++ as the default editor Git will open whenever it needs input, like writing a commit message.

```bash
git config --global -e
```
This opens the global Git config file in the default editor (Notepad++ in my case) so I could verify the settings.

```bash
git init
```
This initializes a new, empty Git repository in the current folder. It creates a hidden `.git` folder that stores all version history.

```bash
git status
```
This shows the current state of the working directory — whether there are new, modified, or staged files.

```bash
git add welcome.txt
```
This moves the file from the working directory into the staging area, meaning Git will now track changes made to it.

```bash
git commit
```
This saves the staged changes into the local repository. Since no `-m` flag was used, it opened Notepad++ so I could type a multi-line commit message.

```bash
git remote add origin [Enter GitHub/GitLab Repository URL]
```
This links the local repository to the remote repository on GitLab.

```bash
git pull origin master
```
This fetches and merges any changes from the remote repository into the local one, before I push my own changes.

```bash
git push origin master
```
This uploads my committed changes from the local repository to the remote GitLab repository.

## 7. Implementation / Execution

I started by making sure Git Bash was installed and working, then set up my username and email so every commit would be linked to my identity. After that, I worked on getting Notepad++ recognized as a command inside Git Bash. This needed a small environment variable change on Windows before Git Bash could locate the `notepad++.exe` file. Once that was done, I configured it as Git's default editor.

With the setup done, I created a new folder for my project and ran `git init` inside it to turn it into a Git repository. I created a text file called `welcome.txt`, checked its status, and added it to staging. When committing, I used the Notepad++ editor to write a proper multi-line commit message instead of a short one-liner.

Lastly, I connected this local repository to the GitLab project I had created earlier, pulled any existing changes (to avoid conflicts), and then pushed my commit to the remote repository.

## 8. Output / Result

After running `git push origin master`, the `welcome.txt` file along with my commit history was visible on the GitLab remote repository.

[Add Screenshot of the Final Output Here]

## 9. Key Learning

* Understood how to configure Git with a username and email for the first time.
* Learned how to set a custom editor (Notepad++) for Git instead of using the default one.
* Got a clear idea of the Git workflow: working directory → staging area → local repository → remote repository.
* Learned the difference between `git pull` and `git push`.

## 10. Conclusion

This exercise helped me understand the basic Git setup process from scratch, including configuration and connecting to a remote repository. I now have a clear picture of how a file moves from being untracked to fully pushed on GitLab. The exercise was completed successfully.

## GitHub Repository

**Repository:** CTS-DeepSkilling

**Repository URL:** https://github.com/Ashwin-2006-t/CTS-DeepSkilling.git

**Folder/Path:** D:\ASHWIN\Ashwin Programing\JAVA Spring Boot\intelij idea\CTS-Deepskilling\Week6\GIT\1. Git-HOL

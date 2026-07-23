# Git HOL 5 – Clean Up and Push Back to Remote Git

## 1. Objective

The objective of this exercise was to clean up the local repository after the previous exercises and push any pending changes back to the remote Git repository.

## 2. Overview

In this short exercise, I checked that the master branch was clean, reviewed all the branches that existed locally, pulled the latest changes from the remote repository, and then pushed the pending changes from the previous exercise ("Git-T03-HOL_002") to the remote repository.

## 3. Tools and Technologies Used

* Git
* Git Bash
* GitLab (remote repository)

## 4. Prerequisites

* Completion of the previous hands-on lab, "Git-T03-HOL_002"

## 5. Steps Performed

1. Checked that the master branch was clean with no uncommitted changes.
2. Listed out all the branches available in the local repository.
3. Pulled the latest changes from the remote repository into master.
4. Pushed the pending changes from the earlier exercise to the remote repository.
5. Verified that the changes were reflected correctly on the remote repository.

## 6. Git Commands Used

```bash
git status
```
This checks whether the master branch has any uncommitted or pending changes before doing anything else.

```bash
git branch -a
```
This lists all the branches available locally and on the remote, so I could confirm which branches existed and which one I was currently on.

```bash
git pull origin master
```
This fetches any new changes from the remote repository and merges them into my local master branch, making sure I'm working with the latest version before pushing.

```bash
git push origin master
```
This pushes all the pending local commits (from the earlier exercise) up to the remote repository on GitLab.

## 7. Implementation / Execution

I began by checking `git status` to confirm the master branch had no leftover uncommitted changes, so I wouldn't run into issues while pulling or pushing. I then listed all the local and remote branches using `git branch -a` to get a clear picture of the repository structure.

Since the previous exercise had left some commits that weren't pushed yet, I first ran `git pull origin master` to make sure my local repository was up to date with the remote one and to avoid any conflicts. After confirming everything was in sync, I ran `git push origin master` to send my pending commits to the remote repository.

## 8. Output / Result

After running `git push origin master`, the previously pending commits were now visible on the remote GitLab repository, and the local and remote repositories were fully in sync.

[Add Screenshot of the Final Output Here]

## 9. Key Learning

* Understood the importance of checking `git status` before performing any remote operations.
* Learned why pulling before pushing helps avoid unnecessary conflicts.
* Got a clearer understanding of how local commits stay "pending" until they are actually pushed to the remote repository.

## 10. Conclusion

This exercise was a simple but important reminder of good Git habits — always check your status, pull before you push, and confirm your changes are reflected on the remote repository. It helped tie together everything I had done in the earlier exercises. The exercise was completed successfully.

## GitHub Repository

**Repository:** CTS-DeepSkilling

**Repository URL:** https://github.com/Ashwin-2006-t/CTS-DeepSkilling.git

**Folder/Path:** D:\ASHWIN\Ashwin Programing\JAVA Spring Boot\intelij idea\CTS-Deepskilling\Week6\GIT\1. Git-HOL

# Git HOL 3 – Branching and Merging in GitLab

## 1. Objective

The goal of this exercise was to understand how branching and merging work in Git, and also to get familiar with creating branch requests and merge requests in GitLab.

## 2. Overview

In this exercise, I created a new branch called `GitNewBranch`, made some changes in it, committed them, and then merged those changes back into the master branch. I also used the P4Merge tool to visually compare the differences between the branch and master.

## 3. Tools and Technologies Used

* Git
* Git Bash
* GitLab (remote repository)
* P4Merge (for visual difference comparison)

## 4. Prerequisites

* Git environment already set up
* P4Merge tool installed and configured for Windows

## 5. Steps Performed

1. Created a new branch named `GitNewBranch` from the master branch.
2. Listed all local and remote branches to check which branch I was currently on (indicated by the `*` symbol).
3. Switched to the newly created branch.
4. Added a new file with some content inside the branch.
5. Committed the changes to the branch.
6. Checked the status of the branch using `git status`.
7. Switched back to the master branch.
8. Compared the differences between master and the branch using the command line.
9. Used the P4Merge tool to view the same differences visually.
10. Merged the branch into master.

## 6. Git Commands Used

```bash
git branch GitNewBranch
```
This creates a new branch called `GitNewBranch` without switching to it.

```bash
git branch -a
```
This lists all branches, both local and remote, and shows a `*` next to the branch I'm currently on.

```bash
git checkout GitNewBranch
```
This switches my working directory to the `GitNewBranch` branch.

```bash
git add <file-name>
```
This stages the new file(s) I added inside the branch.

```bash
git commit -m "Added changes in GitNewBranch"
```
This commits the staged changes to the current branch (`GitNewBranch`), with a short message describing what was done.

```bash
git status
```
This confirms that the branch is clean after committing, meaning there are no more pending changes.

```bash
git checkout master
```
This switches back to the master branch.

```bash
git diff master GitNewBranch
```
This shows the line-by-line differences between the master branch and `GitNewBranch` directly in the terminal.

```bash
git difftool master GitNewBranch
```
This opens the P4Merge tool to show the same differences in a visual, easier-to-read format.

```bash
git merge GitNewBranch
```
This merges the changes from `GitNewBranch` into the current branch (master).

## 7. Implementation / Execution

I started by creating a new branch called `GitNewBranch` off of master. Using `git branch -a`, I could see all the branches together and confirm which one I was on, based on the `*` marker next to the branch name. After switching to `GitNewBranch`, I added a new file with some sample content and committed it, keeping the branch separate from master.

Once the branch had its own commit, I switched back to master and compared the two branches. First I checked the differences using the plain `git diff` command in the terminal, and then I used P4Merge to see the same differences in a cleaner, side-by-side visual format — this made it much easier to understand exactly what had changed.

Finally, while on the master branch, I ran `git merge GitNewBranch` to bring all the changes from the branch into master.

## 8. Output / Result

After the merge, the master branch contained all the changes that were originally made only in `GitNewBranch`. The P4Merge view clearly highlighted the added lines before the merge was performed.

[Add Screenshot of the Final Output Here]

## 9. Key Learning

* Understood how to create and switch between branches in Git.
* Learned the difference between checking diffs in the command line versus a visual tool like P4Merge.
* Understood how merging brings changes from one branch into another.
* Got a better sense of how branching helps in keeping new work separate from the stable master branch until it's ready.

## 10. Conclusion

This exercise gave me a solid understanding of how branching and merging work in a real Git workflow. I now feel more confident creating branches for new features and merging them back safely into master. The exercise was completed successfully.

## GitHub Repository

**Repository:** CTS-DeepSkilling

**Repository URL:** https://github.com/Ashwin-2006-t/CTS-DeepSkilling.git

**Folder/Path:** D:\ASHWIN\Ashwin Programing\JAVA Spring Boot\intelij idea\CTS-Deepskilling\Week6\GIT\3. Git-HOL
